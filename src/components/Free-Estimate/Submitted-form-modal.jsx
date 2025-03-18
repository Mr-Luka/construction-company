import {useState, useRef} from 'react';

export default function ({name}){




    return (
        <div className="submitted-form-modal-wrapper">
            <form method="dialog">
                <button>X</button>
            </form>
            <h3>{name}Bojana Vujosevic</h3>
            <h1>Your form has been submitted</h1>
            <p>Thank you for taking the time to fill out our form. We will review your
            submission and get back to you as soon as possible.</p>
        </div>
    )
}