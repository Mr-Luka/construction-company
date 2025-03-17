import './Free-Estimate.css';

import {useState} from 'react';


export default function FreeEstimate(){
    const [submit, setSubmit] = useState(false);

    function handleSubmit (){
        setSubmit(true);
    }

    return (
        <div className='free-estimate-wrapper'>
            <div className='free-estimate-title'>
                <h1>Get a Free Estimate</h1>
            </div>
            <p className='estimate-text'>Elevate your Southern California lifestyle with a home renovation designed exclusively for you.  Detail your vision – every design preference, every spatial need – and we'll curate a luxurious, bespoke solution that seamlessly integrates with your discerning taste and sophisticated lifestyle.</p>
            <div className='intake-form'>
                <input type='text' required value='Name*'></input>
                <input type='tel' required value='Phone*'></input>
                <input type='email' required value='Email*'></input>
                <input type='text' required value='Zip Code*'></input>
                <input type='text' required value='Message'></input>
            </div>
            <button className='submit-estimate-request' onClick={handleSubmit}>Submit</button>
        </div>
    )
}