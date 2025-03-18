import { useRef, useImperativeHandle, forwardRef, useEffect } from 'react';

const SubmittedFormModal = forwardRef(function SubmittedFormModal({ name, timer }, ref) {
    const dialogRef = useRef();

    useImperativeHandle(ref, () => ({
        open() {
            dialogRef.current.showModal();
        },
        close() {
            dialogRef.current.close();
        }
    }));

    useEffect(() => {
        if (dialogRef.current && dialogRef.current.open) {
            const handleClose = () => {
                clearTimeout(timer.current);
            };

            dialogRef.current.addEventListener('close', handleClose);

            return () => {
                dialogRef.current?.removeEventListener('close', handleClose);
                clearTimeout(timer.current);
            };
        }
    }, [timer]);

    return (
        <dialog className="submitted-form-modal-wrapper" ref={dialogRef}>
            <form method="dialog">
                <button onClick={() => ref.current.close()}>X</button>
            </form>
            <h3>{name}</h3>
            <h1>Your form has been submitted</h1>
            <p>
                Thank you for taking the time to fill out our form. We will review your
                submission and get back to you as soon as possible.
            </p>
        </dialog>
    );
});

export default SubmittedFormModal;