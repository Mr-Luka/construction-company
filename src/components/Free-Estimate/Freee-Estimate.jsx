import './Free-Estimate.css';
import { useState } from 'react';

export default function FreeEstimate() {
    const [ submitted, setSubmitted ] = useState(false);
    const [ formData, setFormData ] = useState({
        name: '',
        phone: '',
        email: '',
        zipCode: '',
        message: ''
    });
    const [ errors, setErrors] = useState({
        name: false,
        phone: false,
        email: false,
        zipCode: false,
    })


    function handleSubmit(e) {
        e.preventDefault(); // Prevents the default form submission behavior (page reload)
        setSubmitted(true); // Sets the submitted state to true, indicating the form has been submitted
        const newErrors = validateForm(); // Calls validateForm to get the current errors
        setErrors(newErrors); // Updates the errors state with the new errors from validateForm
        console.log(newErrors);
        console.log(errors)
        if (Object.values(newErrors).some(error => error)) { // Checks if there are any errors
            return; // If there are errors, the function exits early, preventing form submission
        }
        console.log(formData); // If no errors, logs the form data to the console
    }

    function handleChange(e){
        const {name, value} = e.target;
        setFormData(prevData=> {
            return {
                ...prevData,
                [name]: value
            }
        })
        if(submitted){
            setErrors(newError=> ({...newError, [name]: false}));
            setSubmitted(false);
        }
    }

    function validateForm(){
        const newErrors ={
            name: !formData.name,
            phone: !/^\d{10}$/.test(formData.phone),
            email: !/\S+@\S+\.\S+/.test(formData.email),
            zipCode:!/^\d{5}$/.test(formData.zipCode)
        }
        return newErrors;
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
                    className={submitted && errors.name ? 'invalid-form' : ''}
                />
                <input
                    type='tel'
                    required
                    placeholder='Phone*'
                    name='phone'
                    onChange={handleChange}
                    value={formData.phone}
                    className={submitted && errors.phone ? 'invalid-form' : ''}

                />
                <input
                    type='email'
                    required
                    placeholder='Email*'
                    name='email'
                    onChange={handleChange}
                    value={formData.email}
                    className={submitted && errors.email ? 'invalid-form' : ''}

                />
                <input
                    type='number'
                    required
                    placeholder='Zip Code*'
                    name='zipCode'
                    onChange={handleChange}
                    value={formData.zipCode}
                    className={submitted && errors.zipCode ? 'invalid-form' : ''}

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
            <button className='submit-estimate-request' onClick={handleSubmit} >Submit</button>
        </div>
    );
}