// Service.js
/*
 * Service page component that:
 * - Displays service-related content
 * - Shows available services and their descriptions
 * - Contains service cards and contact information
 * - Represents the services section of the application
 */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import serviceImg from './Images/service1.jpg';
import serviceImg2 from './Images/service2.jpg';
import assistedImg from './Images/assisted.svg';
import comfortImg from './Images/comfort.svg';
import memoryImg from './Images/memory.svg';
import serviceTestimonial from './Images/testimonial2.jpg';
import serviceImg3 from './Images/service3.jpg';

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true, // Re-animate when scrolling up
    });
  }, []);

  const serviceImageData = [
    { src: assistedImg, alt: 'Assisted Living', description: 'When the little things run smoothly, you are free to live your life fully. Our 24/7 staff provides a helping hand so that you can fill your days with new adventure.' },
    { src: comfortImg, alt: 'Comfort Care', description: 'Need a little help for a little while? Our short-term respite care lets your loved one experience VIP Living Centers—meet our team, enjoy our amenities, and feel at home. It might just feel like a vacation they won’t want to leave.' },
    { src: memoryImg, alt: 'Memory Care', description: 'We work closely with families to provide compassionate care and understanding of your loved one with memory loss. Our program offers an innovative and refreshingly optimistic approach to memory care.' },
  ];

  return (
    <>
      {/* Service section */}
      <section className="service-hero-section">
        <div className="service-image-overlay">
          <img src={serviceImg} className="service-hero-img" alt="Service" />
          <div className="service-overlay-text">
            <h2>Service</h2>
          </div>
        </div>
      </section>

      {/* Our Services section with image cards */}
      <section className='offerSection'>
        <h2>OUR SERVICES</h2>
        <div className='offerUnderline'>
        </div>
        <div className="image-row" data-aos="fade-up">
          {/* Loop through each image and display it with description */}
          {serviceImageData.map((item, index) => (
            <div className="image-card2" data-aos="zoom-in-up" key={index}>
              {/* Display the image */}
              <img src={item.src} alt={item.alt} className="fade-img2" />
              {/* Display the description below the image */}
              <p className="image-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='service-section3'>
        <img src={serviceImg3} alt="Service" className="service-hero-img" />
      </section>


      <section className='serviceText-section'>
        <img src={serviceImg2} alt="Service" className="service-hero-img" />
        <div className="text-content">
          <h2>Here to Be a Helping Hand</h2>
          <p>
          If you or your loved one can no longer live on their own, we are here to lend a helping hand to assist you with daily tasks. We provide round-the-clock expert care, supportive services, healthy meals, and enriching activities. Living a vibrant life doesn't have an age limit.
         </p>
        </div>
      </section>

      <section className="sunset-section">
        <div className="image-overlay-section">
          <img src={serviceTestimonial} alt="Background" className="background-image" />
          <div className="overlay-text">
            <h2>Success Story</h2>
            <p>"Your help and compassion are very much appreciated. Each of you brings comfort and the care needed for the residents and their families. Words cannot express all my gratitude. Thank you!" <p> - Cheryl Bass</p></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;