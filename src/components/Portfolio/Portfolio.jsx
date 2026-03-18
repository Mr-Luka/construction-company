import {useState, useRef, useEffect} from 'react';

import './Portfolio.css';
import ProjectPortfolio from './Project-portfolio.jsx';
import ProjectModal from './Projects-modal.jsx';
import { pools, roofs, windows, paint, backyard, kitchen, bathrooms } from './portfolio-object-images.js';



export default function Portfolio(){
    const modalRef = useRef();
    const [openModal, setOpenModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    function handleOpenModal (project) {
        setSelectedProject(project);
        setOpenModal(openModal => !openModal);
        setOpenModal(true);
    }

    function handleCloseModal () {
        setOpenModal(false);
    }

    useEffect(()=> {
        console.log('openModal state:', openModal)
        console.log('modalRef.current:', modalRef.current)
        if(openModal && modalRef.current){
            modalRef.current.open();
        } else if (modalRef.current) {
            modalRef.current.close();
        }
    }, [openModal]);

    return(
        <div className="portfolio-wrapper">
            <h1>Our Projects</h1>
            <div className='our-projects'>
                <ProjectPortfolio openModal={()=> handleOpenModal('pools')} project='Hardscpaing' img={pools[0].url} />
                <ProjectPortfolio openModal={()=> handleOpenModal('roofs')} project='Roofs' img={roofs[0].url} />
                <ProjectPortfolio openModal={()=> handleOpenModal('windows')} project='Windows' img={windows[0].url} />
                <ProjectPortfolio openModal={()=> handleOpenModal('paint')} project='Paint' img={paint[0].url}  />
                <ProjectPortfolio openModal={()=> handleOpenModal('backyard')} project='Backyard' img={backyard[0].url}/>
                <ProjectPortfolio openModal={()=> handleOpenModal('kitchen')} project='Kitchen' img={kitchen[0].url}  />
                <ProjectPortfolio openModal={()=> handleOpenModal('bathrooms')} project='Bathroom' img={bathrooms[0].url} />
            </div>
            {openModal && <ProjectModal ref={modalRef} onClose={handleCloseModal} project={selectedProject}/>}
        </div>
    )
}