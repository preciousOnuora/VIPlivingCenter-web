import React from 'react';
import aboutImg from './Images/community2.jpg';
import testimonialImg from './Images/testimonial4.jpg';

const About = () => {
  return (
    <>
      <section className='aboutText-section'>
        <div className="content-wrapper">
          <div className="text-content">
            <h2>About VIP Living Center</h2>
          </div>
          <img src={aboutImg} alt="about" className="community-hero-img" />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="about-intro-section">
        <div className="about-intro-container">
          <h2>Our Story</h2>
          <p>
            Founded with a vision to provide exceptional care and a warm, home-like environment for seniors, 
            VIP Living Center has been serving the Irving community since 2003. What began as a small 
            family-owned facility has grown into a trusted name in senior care, known for our personalized 
            approach and commitment to enhancing the quality of life for our residents.
          </p>
          <p>
            Our journey started with a simple belief: that every senior deserves to live with dignity, 
            respect, and joy. Today, we continue to uphold this belief through our dedicated staff, 
            comprehensive care services, and unwavering commitment to creating a true home for our residents.
          </p>
        </div>
      </section>

      <section className="about-text-section">
      <h2>A spoonful of sugar makes the medicine go down.</h2>
      <p>VIP Living Centers takes the whole-person-care approach. In addition to expert medical nursing, we believe that tender love and personal care are indispensable in caring for people.</p>
      
      <h2>Doing the right thing by our People</h2>
      <p>At VIP Living Center, our dedicated employees are the vital threads that weave our family together. We value our employees first. By taking care of our staff, together we can care for our residents. Our attitude toward one another is what made VIP Living Centers an inviting place to be. We reward learning and growth, and we provide in-service training of best practices by-weekly to all our employees. We offer living wages to build the best care team.</p>

      <h2>Home is where there is love amongst people.</h2>
      <p>Not a cookie-cutter facility, our 5000ft well-appointed residential home and garden patio provide the best setting for contemplation and social interaction.
      Variety of rooms for different personalities: Private room for aunt particular, semi-private configuration for the those who desire companionship, and dormitory settings for living room lingers who only go to their room when lights are out.
Finding a place your loved one can call home is “done right possible” at the VIP Living Center.</p>
</section>


      {/* Timeline Section */}
      <section className="about-timeline-section">
        <div className="about-timeline-container">
          <h2>Our Journey</h2>
          <div className="timeline-grid">
            <div className="timeline-item">
              <h3>2001</h3>
              <p>Unsatisfied with the options of care facility that could provide the necessary nursing care in the Dallas area, John and Jillian Ross took home a friend who had undergone a massive surgery. They experienced the joy of seeing her recovery responded to the tender loving care.</p>
            </div>
            <div className="timeline-item">
              <h3>2003</h3>
              <p>John and Jillian Ross’s experience resonated with Dr. David Vinson, an emergency room surgent; working together, VIP Living Centers- Irving opened its door to our first resident in 2003.</p>
            </div>
            <div className="timeline-item">
              <h3>2020</h3>
              <p>Since its inception, VIP Living Centers has quietly led the industry in a high-quality assisted living facility. Our core value has remained the same as we welcomed our first resident in 2003. That is to provide the best place for our residents to “aging in place.”After 17 years of service and caring for countless families’ loved ones, John and Jillian Ross passed on the management of VIP Living Center to Bing Lui, a medical planner and architect.</p>
            </div>
            <div className="timeline-item">
              <h3>2025</h3>
              <p>Today, we continue working together as a team of care professionals; we are passionate about making a difference. We take pride in who we are and what we do. We believe in free wills. We choose to live a meaningful life. We decided to enjoy what we do. Caring and generous hearts thrive here. Staff at VIP Living Centers, along with residents’ primary physicians, home health care partners, hospice providers, and the families of the loved ones, making VIP Living Centers a home away from home for our residents’ families and their loved ones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="about-cta-section">
        <div className="about-cta-container">
          <h2>Ready to Learn More?</h2>
          <p>
            We invite you to visit VIP Living Center and see for yourself what makes us special. 
            Schedule a tour, meet our team, and discover how we can provide the care and support 
            your loved one deserves.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">Schedule a Tour</a>
            <a href="/services" className="cta-button secondary">Learn About Our Services</a>
          </div>
        </div>
      </section>

      <section className="sunset-section">
      <div className="image-overlay-section">
        <img src={testimonialImg} alt="Background" className="background-image" />
        <div className="overlay-text">
          <h2>Success Story</h2>
          <p>“My father told me that the last two weeks were the best days he had had for a long while. My only regret was I found VIP Living Centers too late.“ <p> - Steward Rake</p> </p>
        </div>
      </div>
      </section>
    </>
  );
};

export default About;