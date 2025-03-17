import './Free-Estimate.css';
import { useState } from 'react';

export default function FreeEstimate() {
    const [submitted, setSubmitted] = useState(false);
    const [ formData, setFormData ] = useState({
        name: '',
        phone: '',
        email: '',
        zipCode: '',
        message: ''
    })

    function handleSubmitted(){
        setSubmitted(true);
        console.log(formData)
    }

    function handleChange(e){
        const {name, value} = e.target;
        setFormData(prevData=>{
            return {
                ...prevData,
                [name]: value
            }
        })
    
    }

    return (
        <div className='free-estimate-wrapper'>
            <div className='free-estimate-title'>
                <h1>Get a Free Estimate</h1>
            </div>
            <p className='estimate-text'>Elevate your Southern California lifestyle with a home renovation designed exclusively for you. Detail your vision – every design preference, every spatial need – and we'll curate a luxurious, bespoke solution that seamlessly integrates with your discerning taste and sophisticated lifestyle.</p>
            <div className='intake-form'>
                <input
                    type='text'
                    required
                    placeholder='Name*'
                    name='name'
                    onChange={handleChange}
                    value={formData.name}

                />
                <input
                    type='tel'
                    required
                    placeholder='Phone*'
                    name='phone'
                    onChange={handleChange}
                    value={formData.phone}


                />
                <input
                    type='email'
                    required
                    placeholder='Email*'
                    name='email'
                    onChange={handleChange}
                    value={formData.email}

                />
                <input
                    type='number'
                    required
                    placeholder='Zip Code*'
                    name='zipCode'
                    onChange={handleChange}
                    value={formData.zipCode}

                />
                <textarea
                    type='text'
                    required
                    placeholder='Message'
                    name='message'
                    onChange={handleChange}
                    value={formData.message}


                />
            </div>
            <button className='submit-estimate-request' onClick={handleSubmitted}>Submit</button>
        </div>
    );
}