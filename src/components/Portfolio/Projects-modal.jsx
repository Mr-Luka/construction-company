import { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import {roofs, windows, paint, backyard, kitchen, bathrooms} from './portfolio-object-images.js';


const ProjectsModal = forwardRef(function ProjectsModal(props, ref) { 
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

    function getProjectImages(){
        switch (props.project) {
            case 'roofs':
                return roofs;
            case 'windows':
                return windows;
            case 'paint':
                return paint;
            case 'backyard':
                return backyard;
            case 'kitchen':
                return kitchen;
            case 'bathrooms':
                return bathrooms;
            default:
                return []
        }
    }

    const images = getProjectImages();

    return (
        <dialog className="projects-modal-wrapper" ref={modalProjectsRef}>
            <form method="dialog">
                <button onClick={()=> props.onClose()}>X</button>
            </form>
            <div className="projects-pictures">
                {images.map((image, index)=> (
                    <img 
                        key={index}
                        src={image.url}
                        alt={`Project ${index + 1}`}
                        onClick={() => handleImageClick(index)}
                        className={zoomedImage === index ? 'zoomed-image' : ''}
                    />
                ))}
                {zoomedImage !== null && (
                    <div className="zoom-overlay" onClick={handleZoomOut}>
                        <img src={images[zoomedImage].url} alt="Zoomed Project" className="zoom-image" />
                    </div>
                )}
            </div>
        </dialog>
    );
});

export default ProjectsModal;