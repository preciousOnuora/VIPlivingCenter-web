import React, { useState } from 'react';
import contactImg from './Images/contactImg.jpg';
import config from './config';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    console.log('Submitting form to:', `${config.apiBaseUrl}/contact`);
    console.log('Form data:', formData);

    try {
      const response = await fetch(`${config.apiBaseUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      
      const result = await response.json();
      console.log('Response data:', result);
      
      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      console.error('Error details:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="community-hero-section">
        <div className="community-image-overlay">
          <img src={contactImg} className="community-hero-img" alt="Contact Us" />
          <div className="community-overlay-text">
            <h2>Contact us</h2>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="contact-intro-section">
        <div className="contact-intro-container">
          <h2>Get in Touch</h2>
          <p>
            We understand how challenging it can be to find the right care for a loved one, and we are here to help. 
            At VIP Living Centers, we offer a home-like environment where your family members can thrive, with compassionate 
            and expert care tailored to their individual needs. Whether you are seeking assisted living, memory care, or 
            respite care, our dedicated staff is ready to provide the support and attention your loved ones deserve.
          </p>
          <p>
            We invite you to reach out and learn more about how we can assist your family in finding a safe, welcoming, 
            and vibrant place for your loved one to call home.
          </p>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="contact-main-section">
        <div className="contact-main-container">
          {/* Contact Information */}
          <div className="contact-info-section">
            <h2>VIP LIVING CENTER</h2>
            <div className="contact-details">
              <div className="contact-item">
                <h3>Address</h3>
                <p>{config.contact.address}</p>
              </div>
              <div className="contact-item">
                <h3>Phone</h3>
                <p><a href={`tel:${config.contact.phone}`}>{config.contact.phone}</a></p>
              </div>
              <div className="contact-item">
                <h3>Email</h3>
                <p><a href={`mailto:${config.contact.email}`}>{config.contact.email}</a></p>
              </div>
              <div className="contact-item">
                <h3>Hours</h3>
                <p>24/7 Care Available<br />Office Hours: Monday - Friday, 9:00 AM - 5:00 PM</p>
              </div>
            </div>
            
            <div className="contact-cta">
              <h3>Ready to Learn More?</h3>
              <p>We'd love to show you around our facility and answer any questions you may have. 
                 Contact us today to schedule a tour or consultation.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            
            {/* Status Messages */}
            {submitStatus && (
              <div className={`status-message ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this regarding?"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Please tell us more about your inquiry..."
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map-section">
        <div className="contact-map-container">
          <h2>Visit Our Location</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.8876122578!2d-96.9944!3d32.8147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDQ4JzUyLjkiTiA5NsKwNTknNDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VIP Living Centers Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;