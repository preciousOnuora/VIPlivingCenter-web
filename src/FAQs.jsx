import React, { useState } from 'react';
import faqImg from './Images/faqImage.jpg';
import faqImg2 from './Images/testimonial3.jpg';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "Is VIP Living Center right for my loved one?",
      answer: "When a family can no longer provide adequate care for their loved one at home, we understand the stress of finding a place where your loved ones can call home. We strive to create a home-like environment so your loved ones can be usher into a familiar setting where warmth and opportunities of developing friendship abound. VIP living Center is a supportive senior living option that promotes independence and personal dignity in a safe, home-like environment. We help with daily tasks and tailor a daily routine according to an individual’s unique needs and preferences."
    },
    {
      question: "What makes VIP Living Center different from other senior living communities?",
      answer: "VIP Living Center focuses on creating a home-like environment where residents feel comfortable, supported, and engaged. The facility is designed to promote independence, dignity, and personalized care while providing a strong sense of community."
    },
    {
      question: "What services does VIP Living Center provide?",
      answer: "VIP Living Center offers assisted living, memory care, and respite care services. The facility provides 24/7 expert care, support with daily tasks, nutritious meals, enriching activities, and medical coordination to ensure residents’ well-being."
    },
    {
      question: "As my loved one is aging and in need of round-the-clock skilled nursing care, do I need to move my loved one?",
      answer: "The health and wellbeing of our residents are most important to us. Family should consult their physician as to what is the best environment for their loved ones. VIP Living Center is an aging-in-place facility. Our dedicated staff makes VIP living Center the best and last place your loved one will ever need to be. As your loved one’s mental and physical capacities decline, they will be able to remain at VIP Living Centers surrounded by familiar caregivers and friends. Our trained staff has worked closely with residents’ physicians and our hospice partners for nearly two decades. We have cared for many residents until the very end of their lives."
    },
    {
      question: "What is the cost, and do you accept Medicare?",
      answer: "We are a self-pay facility and do not accept Medicare. We work with the family to provide financial statements to get reimbursement from private or long-term insurance. The cost of assisted living is based on the type and size of the room, the level of care needs, and the service options chosen by the resident. "
    },
    {
      question: "Can my loved one age in place at VIP Living Center without needing to relocate later?",
      answer: "Yes, VIP Living Center is an aging-in-place facility, meaning residents can remain in the same community as their care needs evolve. The center works closely with physicians, hospice providers, and families to ensure residents receive appropriate care throughout their stay."
    },
    {
      question: "How do you handle medical appointments and medication management for residents?",
      answer: "VIP Living Center staff coordinates with physicians, pharmacies, and specialists to manage medication schedules, lab work, and medical appointments. The facility also has a nurse on staff to oversee residents’ care plans and communicate with primary care doctors."
    }
  ];

  return (
    <>
      <section className="community-hero-section">
        <div className="community-image-overlay">
          <img src={faqImg} className="community-hero-img" alt="FAQ" />
          <div className="faq-overlay-text">
            <h2>Frequently Asked Questions</h2>
          </div>
        </div>
      </section>

      <section className="faq-content-section">
        <div className="faq-container">
          <p className="faq-intro">
          <strong>At VIP Living Center</strong>, we believe home is a feeling—of warmth, care, and belonging. We offer a safe, supportive environment where your loved one can thrive. Whether you need assisted living, memory care, or a short-term stay, our team is here to guide you every step of the way. Contact us today through our <strong><a href="/contact" style={{ color: '#1f2937', textDecoration: 'none' }}>Contact Page</a></strong>—we look forward to hearing from you!
         </p>
          
          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className={`faq-question ${openFAQ === index ? 'active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </button>
                <div className={`faq-answer ${openFAQ === index ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sunset-section">
      <div className="image-overlay-section">
        <img src={faqImg2} alt="Background" className="background-image" />
        <div className="overlay-text">
          <h2>Success Story</h2>
          <p>“To all of the wonderful caregivers who lovingly took care of Mr. Chuck, we can never thank you enough for all you did above and beyond what was required.“ <p> - Kay, Kristen, Britni, Marco and Jessi </p> </p>
        </div>
      </div>
      </section>
    </>
  );
};

export default FAQs;