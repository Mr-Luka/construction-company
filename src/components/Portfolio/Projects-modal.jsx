import { useState, useRef, forwardRef, useImperativeHandle } from 'react';

import pictureProject from '../../assets/imgs/bathroom.jpg';

const ProjectsModal = forwardRef(function ProjectsModal(props, ref) { // Add props here
    const modalProjectsRef = useRef();
    const [zoomedImage, setZoomedImage] = useState( null);

    useImperativeHandle(ref, () => {
        return {
            open() {
                modalProjectsRef.current.showModal();
            },
            close() {
                modalProjectsRef.current.close();
            }
        };
    });

    function handleImageClick(index) {
        setZoomedImage(index);
    }

    function handleZoomOut(){
        setZoomedImage(null);
    }

    return (
        <dialog className="projects-modal-wrapper" ref={modalProjectsRef}>
            <form method="dialog">
                <button onClick={()=> props.onClose()}>X</button>
            </form>
            <div className="projects-pictures">
                {[...Array(8)].map((_, index)=> (
                    <img 
                        key={index}
                        src={pictureProject}
                        alt={`Project ${index + 1}`}
                        onClick={() => handleImageClick(index)}
                        className={zoomedImage === index ? 'zoomed-image' : ''}
                    />
                ))}
                {zoomedImage !== null && (
                    <div className="zoom-overlay" onClick={handleZoomOut}>
                        <img src={pictureProject} alt="Zoomed Project" className="zoom-image" />
                    </div>
                )}
            </div>
        </dialog>
    );
});

export default ProjectsModal;