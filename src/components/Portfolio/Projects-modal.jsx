import { useRef, forwardRef, useImperativeHandle } from 'react';

const ProjectsModal = forwardRef(function ProjectsModal(props, ref) { // Add props here
    const modalProjectsRef = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                modalProjectsRef.current.showModal();
            },
        };
    });

    return (
        <dialog className="projects-modal-wrapper" ref={modalProjectsRef}>
            <form method="dialog">
                <button>X</button>
            </form>
            <div className="projects-pictures">
                <img />
                <img />
                <img />
                <img />
                <img />
                <img />
                <img />
                <img />
            </div>
        </dialog>
    );
});

export default ProjectsModal;