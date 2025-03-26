import { useState, useRef, forwardRef, useImperativeHandle, useEffect } from 'react';
import { roofs, windows, paint, backyard, kitchen, bathrooms } from './portfolio-object-images.js';

const ProjectsModal = forwardRef(function ProjectsModal(props, ref) {
    const modalProjectsRef = useRef();
    const [zoomedImage, setZoomedImage] = useState(null);
    const [modalSize, setModalSize] = useState({ width: "80%", height: "80vh" });
    const [isZoomed, setIsZoomed] = useState(false);

    useImperativeHandle(ref, () => ({
        open() {
            if (modalProjectsRef.current) {
                modalProjectsRef.current.showModal();
                setTimeout(() => {
                    document.addEventListener('click', handleOutsideClick);
                }, 0);
            }
        },
        close() {
            if (modalProjectsRef.current) {
                modalProjectsRef.current.close();
                document.removeEventListener('click', handleOutsideClick);
            }
        },
    }));

    useEffect(() => {
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    function handleOutsideClick(e) {
        if (!modalProjectsRef.current) return;

        const rect = modalProjectsRef.current.getBoundingClientRect();
        if (
            e.clientX < rect.left ||
            e.clientX > rect.right ||
            e.clientY < rect.top ||
            e.clientY > rect.bottom
        ) {
            props.onClose();
            document.removeEventListener('click', handleOutsideClick);
        }
    }

    function getProjectImages() {
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
                return [];
        }
    }

    const images = getProjectImages();

    function handleImageClick(index) {
        const img = new Image();
        img.src = images[index].url;

        img.onload = () => {
            setModalSize({ width: `${img.width}px`, height: `${img.height}px` });
            setZoomedImage(images[index].url);
            setIsZoomed(true);

            // Disable scrolling when zoomed in
            modalProjectsRef.current.classList.add("no-scroll");
        };
    }

    function handleZoomOut() {
        setZoomedImage(null);
        setModalSize({ width: "80%", height: "80vh" }); // Restore modal to original size
        setIsZoomed(false);

        // Enable scrolling again
        modalProjectsRef.current.classList.remove("no-scroll");
    }

    return (
        <>
            <dialog className={`projects-modal-wrapper ${isZoomed ? 'no-scroll' : ''}`} ref={modalProjectsRef} style={modalSize}>
                <form method="dialog">
                    <button onClick={(e) => { 
                        e.stopPropagation(); 
                        props.onClose();
                    }}>X</button>
                </form>

                {!zoomedImage ? (
                    <div className="projects-pictures">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image.url}
                                alt={`Project ${index + 1}`}
                                onClick={(e) => { 
                                    e.stopPropagation(); 
                                    handleImageClick(index);
                                }}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="zoomed-container" onClick={handleZoomOut}>
                        <img src={zoomedImage} alt="Zoomed Project" className="zoomed-image" />
                    </div>
                )}
            </dialog>
        </>
    );
});

export default ProjectsModal;
