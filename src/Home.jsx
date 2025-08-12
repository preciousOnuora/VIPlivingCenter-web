// Home.js
/*
 * Home page component that:
 * - Displays the welcome section with home image
 * - Shows feature cards with sample content
 * - Contains additional content sections
 * - Represents the main landing page content
 */
import React, { useEffect } from 'react';
import homeImg from './Images/homeImage.jpg';
// import welcomeVideo from './Videos/vipvideo.mp4'; // Temporarily disabled for Vercel deployment
import sunsetImg from './Images/sunset.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

import img1 from './Images/image1.jpg';
import img2 from './Images/image2.jpg';
import img3 from './Images/image3.jpg';
import img4 from './Images/image4.jpg';
import img5 from './Images/twoppl.jpg';
import scrollImg from './Images/scroll.png';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true, // Re-animate when scrolling up
    });

    // Add scroll event listener to hide scroll image
    const handleScroll = () => {
      const scrollSection = document.querySelector('.scroll-section');
      if (scrollSection) {
        if (window.scrollY > 100) {
          scrollSection.classList.add('scrolled');
        } else {
          scrollSection.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const imageData = [
    { src: img1, alt: 'Image 1', description: '24/7 Staff Assistance' },
    { src: img2, alt: 'Image 2', description: 'A Place to Call Home' },
    { src: img3, alt: 'Image 3', description: 'Delicious Nutritious Meals' },
    { src: img4, alt: 'Image 4', description: 'Attending Total Healthcare Needs' },
  ];

  return (
    <>
      {/* Welcome section */}
      <section className="content-section">
        <img src={homeImg} className="home-img" alt="homeImg" />
      </section>

      <section className="content-section scroll-section">
        <img src={scrollImg} className="scroll" alt="scrollImg" />
      </section>

      {/* About Section */}
      <section className="home-about-section">
        <div className="home-about-container">
          <div className="home-about-content">
            <div className="about-text" data-aos="fade-right">
              <h2>Where Compassion Meets Care</h2>
              <p>
                VIP Living Center-Irving is a small State licensed type B assisted living facility, 
                conveniently located in South Irving at the corner of a quiet cul-de-sac. We are 
                pleased to provide a home-like environment and family-friendly atmosphere.
              </p>
              <p>
                We offer assistance and the very best of care to our residents, while respecting 
                their dignity and guarding the privacy they cherish and deserve, thereby improving 
                their quality of life and personal well-being.
              </p>
              <Link to="/about" className="about-link">Learn More About Us →</Link>
            </div>
            <div className="about-image" data-aos="fade-left">
              <img src={img5} alt="Residents enjoying their time together" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section - Temporarily replaced with placeholder */}
      <section className="home-video-section">
        <div className="home-video-container">
          <h2 data-aos="fade-up">Take a Virtual Tour</h2>
          <p data-aos="fade-up" data-aos-delay="200">
            See our facility and meet our caring staff
          </p>
          <div className="video-wrapper" data-aos="zoom-in">
            <div className="video-placeholder">
              <p>🎥 Virtual Tour Video Coming Soon</p>
              <p>Contact us to schedule an in-person tour!</p>
              <Link to="/contact" className="cta-btn primary">Schedule a Tour</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='offerSection'>
        <h2>WHAT WE OFFER</h2>
        <div className='offerUnderline'>
        </div>
        {/* Container for all images with fade-up animation on scroll */}
        <div className="image-row" data-aos="fade-up">
          {/* Loop through each image and display it with description */}
          {imageData.map((item, index) => (
            <div className="image-card" data-aos="zoom-in-up" key={index}>
              {/* Display the image */}
              <img src={item.src} alt={item.alt} className="fade-img" />
              {/* Display the description below the image */}
              <p className="image-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="home-testimonial-section">
        <div className="testimonial-overlay">
          <img src={sunsetImg} alt="Beautiful sunset at VIP Living Center" className="testimonial-bg" />
          <div className="testimonial-content">
            <div className="testimonial-text" data-aos="fade-up">
              <h2>Success Story</h2>
              <blockquote>
                "My uncle spent his last years surrounded by caring staff at VIP Living Center. 
                It was such an incredible experience to watch them lavish their attention on him. 
                Now, a decade later, when it became clear that my aunt can no longer live by herself, 
                we are grateful that VIP is again opening their door to our family. Thank you!"
              </blockquote>
              <cite>- The Pannel Family</cite>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta-section">
        <div className="home-cta-container">
          <div className="cta-content" data-aos="fade-up">
            <h2>Ready to Learn More?</h2>
            <p>
              Contact us today to schedule a tour, ask questions, or learn how we can help 
              your family find the perfect care solution.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-btn primary">Contact Us</Link>
              <Link to="/community" className="cta-btn secondary">View Community</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
