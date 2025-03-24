import {useState, useRef, useEffect} from 'react';

import './Portfolio.css';
import ProjectPortfolio from './Project-portfolio.jsx';
import ProjectModal from './Projects-modal.jsx';

// cover images fro projectes
import kitchen from '../../assets/imgs/kitchen1.jpeg'

export default function Portfolio(){
    const modalRef = useRef();
    const [openModal, setOpenModal] = useState(false);

    function handleOpenModal () {
        setOpenModal(openModal => !openModal);
    }

    function handleCloseModal () {
        setOpenModal(false);
    }

    useEffect(()=> {
        if(openModal && modalRef.current){
            modalRef.current.open();
        }
    }, [openModal]);

    return(
        <div className="portfolio-wrapper">
            <h1>Our Projects</h1>
            <div className='our-projects'>
                <ProjectPortfolio openModal={handleOpenModal} project='Roofs' img={kitchen} description='Our roofs are strong' />
                <ProjectPortfolio openModal={handleOpenModal} project='Windows' img={kitchen} description='Our windows are strong' />
                <ProjectPortfolio openModal={handleOpenModal} project='Paint' img={kitchen} description='Our paints are strong' />
                <ProjectPortfolio openModal={handleOpenModal} project='Backyard' img={kitchen} description='Our backyards are strong' />
                <ProjectPortfolio openModal={handleOpenModal} project='Kitchen' img={kitchen} description='Our kitchens are strong' />
                <ProjectPortfolio openModal={handleOpenModal} project='Bathroom' img={kitchen} description='Our bathrooms are strong' />
            </div>
            {openModal && <ProjectModal ref={modalRef} onClose={handleCloseModal}/>}
        </div>
    )
}