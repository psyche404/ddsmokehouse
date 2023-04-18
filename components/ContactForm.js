import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData);
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <div className="contact-form">
      {submitStatus === 'success' ? (
        <p>Form submitted successfully!</p>
      ) : (
        <>
          {submitStatus === 'error' && (
            <p>There was an error submitting the form.</p>
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;
