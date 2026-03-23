import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import './Portfolio.css';
import ProjectPortfolio from './Project-portfolio.jsx';
import ProjectModal from './Projects-modal.jsx';
import {
  hardscaping_landscaping,
  roofs,
  windows,
  paint,
  kitchen,
  bathrooms
} from './portfolio-object-images.js';

export default function Portfolio() {
  const modalRef = useRef();
  const [searchParams, setSearchParams] = useSearchParams();
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  function handleOpenModal(project) {
    setSelectedProject(project);
    setOpenModal(true);
    setSearchParams({ project });
  }

  function handleCloseModal() {
    setOpenModal(false);
    setSelectedProject(null);
    setSearchParams({});
  }

  useEffect(() => {
    const projectFromUrl = searchParams.get('project');

    if (
      projectFromUrl &&
      [
        'hardscaping_landscaping',
        'roofs',
        'paint',
        'windows',
        'kitchen',
        'bathrooms',
      ].includes(projectFromUrl)
    ) {
      setSelectedProject(projectFromUrl);
      setOpenModal(true);
    }
  }, [searchParams]);

  useEffect(() => {
    if (openModal && modalRef.current) {
      modalRef.current.open();
    } else if (modalRef.current) {
      modalRef.current.close();
    }
  }, [openModal]);

  return (
    <div className="portfolio-wrapper">
      <h1>Our Projects</h1>

      <div className="our-projects">
        <ProjectPortfolio
          openModal={() => handleOpenModal('hardscaping_landscaping')}
          project="Hardscaping & Landscaping"
          img={hardscaping_landscaping[0].url}
        />
        <ProjectPortfolio
          openModal={() => handleOpenModal('roofs')}
          project="Roofing & Insulation"
          img={roofs[0].url}
        />
        <ProjectPortfolio
          openModal={() => handleOpenModal('paint')}
          project="Exterior & Interior Paint"
          img={paint[0].url}
        />
        <ProjectPortfolio
          openModal={() => handleOpenModal('windows')}
          project="Windows"
          img={windows[0].url}
        />
        <ProjectPortfolio
          openModal={() => handleOpenModal('kitchen')}
          project="Kitchen"
          img={kitchen[0].url}
        />
        <ProjectPortfolio
          openModal={() => handleOpenModal('bathrooms')}
          project="Bathroom"
          img={bathrooms[0].url}
        />
      </div>

      {openModal && (
        <ProjectModal
          ref={modalRef}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </div>
  );
}