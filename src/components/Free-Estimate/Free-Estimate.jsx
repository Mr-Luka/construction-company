import './Free-Estimate.css';
import { useState } from 'react';

export default function FreeEstimate() {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

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
      setErrors((prev) => ({ ...prev, [name]: false }));
    }

    if (status.message) {
      setStatus({ type: '', message: '' });
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

  async function handleSubmit(e) {
    e.preventDefault();

    const newErrors = validateForm();
    setErrors(newErrors);
    setSubmitted(true);
    setStatus({ type: '', message: '' });

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    setIsSending(true);

    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      zipCode: formData.zipCode,
      message: formData.message,
      _subject: 'New Free Estimate Request - Neighborhood Remodeling',
      _captcha: 'false',
      _template: 'table',
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/neighborhoodremodelinginc@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      console.log('Form result:', result);

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your request has been sent successfully.'
        });

        setFormData({
          name: '',
          phone: '',
          email: '',
          zipCode: '',
          message: ''
        });

        setSubmitted(false);
        setErrors({
          name: false,
          phone: false,
          email: false,
          zipCode: false,
        });
      } else {
        setStatus({
          type: 'error',
          message: result.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      console.error('Form submit error:', error);
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className='free-estimate-wrapper'>
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
          placeholder='Name*'
          name='name'
          onChange={handleChange}
          value={formData.name}
          className={submitted && errors.name ? 'invalid-form' : ''}
        />

        <input
          type='tel'
          placeholder='Phone*'
          name='phone'
          onChange={handleChange}
          value={formData.phone}
          className={submitted && errors.phone ? 'invalid-form' : ''}
        />

        <input
          type='email'
          placeholder='Email*'
          name='email'
          onChange={handleChange}
          value={formData.email}
          className={submitted && errors.email ? 'invalid-form' : ''}
        />

        <input
          type='text'
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

        <button
          type="submit"
          className='submit-estimate-request'
          disabled={isSending}
        >
          {isSending ? 'Sending...' : 'Submit'}
        </button>

        {status.message && (
          <p className={`form-status ${status.type}`}>
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}