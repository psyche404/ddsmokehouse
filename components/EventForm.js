import React, { useState } from 'react';

const EventForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to your Strapi API
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      {/* Your Event form fields and submit button */}
    </form>
  );
};

export default EventForm;
