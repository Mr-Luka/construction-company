import {useState, useRef, useImperativeHandle, forwardRef } from 'react';

const SubmittedFormModal= forwardRef( function SubmittedFormModal({name}, ref){
    const dialog = useRef();

    useImperativeHandle(ref, ()=> {
        return {
            open(){
                dialog.current.showModal();
            }
        }
    })


    return (
        <dialog className="submitted-form-modal-wrapper" ref={dialog}>
            <form method="dialog">
                <button>X</button>
            </form>
            <h3>{name}</h3>
            <h1>Your form has been submitted</h1>
            <p>Thank you for taking the time to fill out our form. We will review your
            submission and get back to you as soon as possible.</p>
        </dialog>
    )
})

export default SubmittedFormModal;