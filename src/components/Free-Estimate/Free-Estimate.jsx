import './Free-Estimate.css';
import { useState } from 'react';

export default function FreeEstimate() {
    const [submit, setSubmit] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        zipCode: '',
        message: ''
    });
    const [errors, setErrors] = useState({ // Corrected typo: setErrors
        name: false,
        phone: false,
        email: false,
        zipCode: false
    });

    function handleSubmit(e) {
        e.preventDefault();
        setSubmit(true); // Set submit to true on click
        const validationErrors = validateForm();
        setErrors(validationErrors); // Update errors state
        if (Object.values(validationErrors).some(error => error)) {
            return;
        }
        console.log(formData);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
        if (submit) {
            setErrors(prevErrors => ({ ...prevErrors, [name]: false })); // Clear error when typing
        }
    }

    function validateForm() {
        const newErrors = {
            name: !formData.name,
            phone: !/^\d{10}$/.test(formData.phone),
            email: !/\S+@\S+\.\S+/.test(formData.email),
            zipCode: !/^\d{5}$/.test(formData.zipCode)
        };
        return newErrors;
    }

    const isFormValid = !Object.values(errors).some(error => error)
        && formData.name &&
        /^\d{10}$/.test(formData.phone) &&
        /\S+@\S+\.\S+/.test(formData.email) &&
        /^\d{5}$/.test(formData.zipCode);

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
                    value={formData.name}
                    onChange={handleChange}
                    style={{ borderColor: submit && errors.name ? 'red' : '' }}
                />
                <input
                    type='tel'
                    required
                    placeholder='Phone*'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    style={{ borderColor: submit && errors.phone ? 'red' : '' }}
                />
                <input
                    type='email'
                    required
                    placeholder='Email*'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    style={{ borderColor: submit && errors.email ? 'red' : '' }}
                />
                <input
                    type='number'
                    required
                    placeholder='Zip Code*'
                    name='zipCode'
                    value={formData.zipCode}
                    onChange={handleChange}
                    style={{ borderColor: submit && errors.zipCode ? 'red' : '' }}
                />
                <input
                    type='text'
                    required
                    placeholder='Message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>
            <button className='submit-estimate-request' onClick={handleSubmit}>Submit</button>
        </div>
    );
}