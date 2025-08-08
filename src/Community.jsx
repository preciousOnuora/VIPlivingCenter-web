import React from 'react';
import communityImg from './Images/communityImg.jpg';
import communityTextImg from './Images/community2.jpg';
import communityTextImg2 from './Images/community3.jpg';
import communityTextImg3 from './Images/community4.jpg';

const Community = () => {
  return (
    <>
      <section className="community-hero-section">
        <div className="community-image-overlay">
          <img src={communityImg} className="community-hero-img" alt="Community" />
          <div className="community-overlay-text">
            <h2>Community & Activities</h2>
          </div>
        </div>
      </section>

      <section className='communityText-section'>
        <div className="content-wrapper">
          <img src={communityTextImg} alt="Community" className="community-hero-img" />
          <div className="text-content">
            <h2>Building Connections</h2>
            <p>
              At VIP Living Center, we believe that community is at the heart of a fulfilling life. Our residents form lasting friendships, share experiences, and create memories together. From group activities to shared meals, every day brings new opportunities to connect and grow. We foster an environment where everyone feels valued, heard, and part of something special.
            </p>
          </div>
        </div>
      </section>

      <section className='communityText-section2'>
        <div className="content-wrapper">
          <div className="text-content">
            <h2>Creating Memories Together</h2>
            <p>
              Every day at VIP Living Center is filled with opportunities to create meaningful memories. Whether it's participating in our engaging activities, enjoying delicious meals together, or simply sharing stories in our comfortable common areas, our residents build lasting bonds that enrich their lives. We believe that the best care includes fostering genuine connections and creating a true sense of family.
            </p>
          </div>
          <img src={communityTextImg2} alt="Community" className="community-hero-img" />
        </div>
      </section>

      <section className='communityText-section'>
        <div className="content-wrapper">
          <img src={communityTextImg3} alt="Community" className="community-hero-img" />
          <div className="text-content">
            <h2>Building Connections</h2>
            <p>
              At VIP Living Center, we believe that community is at the heart of a fulfilling life. Our residents form lasting friendships, share experiences, and create memories together. From group activities to shared meals, every day brings new opportunities to connect and grow. We foster an environment where everyone feels valued, heard, and part of something special.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;