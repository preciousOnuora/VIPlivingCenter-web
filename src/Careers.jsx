import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import careerImg from './Images/career1.jpg';
import careerImg2 from './Images/career2.jpg';
import testimonal3 from './Images/testimonial3.jpg';

const Career = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true, // Re-animate when scrolling up
    });
  }, []);

  return (
    <>
      <section className="service-hero-section">
        <div className="service-image-overlay">
          <img src={careerImg} className="service-hero-img" alt="Career" />
          <div className="service-overlay-text">
            <h2>Career</h2>
          </div>
        </div>
      </section>

      <section className="career-intro-section" data-aos="fade-up">
        <div className="career-intro-container">
          <p>
            Our dedicated and caring staff contributes to our success and strong core values. We focus on attracting and retaining the best team. We are committed to providing work that is rewarding and fulfilling. We reward our dedicated employees with opportunities for growth and a work environment that is inspiring.
          </p>
        </div>
      </section>

      <section className="career-content-section">
        <div className="career-content-wrapper">
          <div className="career-image-container" data-aos="fade-right">
            <img src={careerImg2} alt="career-text-image" className="career-content-img" />
          </div>
          <div className="career-text-container" data-aos="fade-left">
            <h2>Our Benefits</h2>
            <p>Competitive wages- we continually evaluate our offerings to ensure that we remain competitive.</p>
            
            <h2>Continue Education</h2>
            <p>We provide by-weekly in-service training to equip our staff with up-to-date best practices. Our educational assistance program will reimburse qualified employees for tuition expenses, up to a certain amount directly related to the career path at the VIP Living Center.</p>
            
            <p className="career-cta">Join us now in a career that makes a difference.</p>
          </div>
        </div>
      </section>

      <section className="sunset-section">
      <div className="career-overlay-section">
        <img src={testimonal3} alt="Background" className="background-image" />
        <div className="overlay-text">
          <h2>Success Story</h2>
          <p>“Not long ago, VIP Living Center in Irving, TX, was, for our family, a safe haven in a storm. Having suffered inadequate 
            care at other facilities, we intensely focused on finding a satisfactory provider for Mom during her recovery from multiple health 
            issues. Bing and his staff truly exhibit what is described in detail on their website. The explanation of services and attitudes is 
            entirely accurate, with no exaggeration. Many older people are set in their ways and may find any change to their lives unsettling, 
            but this care home masterfully covers all the critical issues—first with kindness and then with a complete and genuine regard for comfort 
            and cleanliness. Safety and a pleasant atmosphere are not lacking in any regard. Professional respect for the staff by management is 
            evident and allows each member to be at their best when interacting with resident patients. We were more than comforted to experience the 
            large windows of access for visitation and never felt as if we were not welcome or that anything was being hidden from us regarding the 
            true level of care provided regularly. Mom recovered in part, I believe, due to the high quality of care provided at VIP Living Center, 
            and she was able to return home. Should another incident occur, or when we reach that final season of life when a care facility is 
            necessary, we only hope that Bing and his staff will be available to receive us with the same diligent and loving methods we experienced 
            for many months. Last but not least, we found Bing himself to be a hands-on manager and, therefore, fully aware of the true nature of the 
            care being provided. He chooses to be available and introduces pleasant gestures of kindness as an unexpected surprise to the staff and 
            residents, which always brought about good cheer to people doing their best to deal with life and hardships.“ <p> - Shawn Cook </p> </p>
        </div>
      </div>
      </section>
    </>
  );
};

export default Career;