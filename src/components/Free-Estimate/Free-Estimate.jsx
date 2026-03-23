import './Free-Estimate.css';
import { useState, useRef } from 'react';
import SubmittedFormModal from './Submitted-form-modal.jsx';

export default function FreeEstimate() {
  const dialog = useRef();
  const timer = useRef(null);

  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zipCode: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
    zipCode: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    if (submitted) {
      setErrors((newError) => ({ ...newError, [name]: false }));
      setSubmitted(false);
    }
  }

  function validateForm() {
    return {
      name: !formData.name.trim(),
      phone: !/^\d{10}$/.test(formData.phone.replace(/\D/g, '')),
      email: !/\S+@\S+\.\S+/.test(formData.email),
      zipCode: !/^\d{5}$/.test(formData.zipCode)
    };
  }

  function closeModalTimer() {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      if (dialog.current) {
        dialog.current.close();
        setSubmissionSuccess(false);
      }
    }, 6000);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    try {
      const response = await fetch('https://formsubmit.co/ajax/neighborhoodremodelinginc@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          zipCode: formData.zipCode,
          message: formData.message,
          _subject: 'New Free Estimate Request - Neighborhood Remodeling'
        })
      });

      const result = await response.json();

      if (result.success === 'true' || result.success === true) {
        setSubmissionSuccess(true);

        setTimeout(() => {
          dialog.current.open();
          closeModalTimer();
        }, 0);

        setFormData({
          name: '',
          phone: '',
          email: '',
          zipCode: '',
          message: ''
        });

        setSubmitted(false);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    }
  }

  return (
    <>
      <div className='free-estimate-wrapper'>
        {submissionSuccess && (
          <SubmittedFormModal ref={dialog} name={formData.name || 'there'} timer={timer} />
        )}

        <div className='free-estimate-title'>
          <h1>Get a Free Estimate</h1>
        </div>

        <p className='estimate-text'>
          Elevate your Southern California lifestyle with a home renovation designed exclusively for you.
          Detail your vision – every design preference, every spatial need – and we'll curate a luxurious,
          bespoke solution that seamlessly integrates with your discerning taste and sophisticated lifestyle.
        </p>

        <form className='intake-form' onSubmit={handleSubmit}>
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
            type='text'
            required
            placeholder='Zip Code*'
            name='zipCode'
            onChange={handleChange}
            value={formData.zipCode}
            className={submitted && errors.zipCode ? 'invalid-form' : ''}
          />

          <textarea
            placeholder='Message'
            name='message'
            onChange={handleChange}
            value={formData.message}
          />

          <button type="submit" className='submit-estimate-request'>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}