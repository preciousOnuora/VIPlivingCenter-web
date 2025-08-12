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
            <h2>Activities</h2>
            <p>
            Our Life Enrichment program is far from cookie-cutter. We continually evaluate and add new programs to engage our residents in meaningful ways.
Life Enrichment coordinators plan a rotating calendar of engaging activities, including music therapy, art, trivia, book clubs, bonsai classes, foosball competitions, and so much more!
We leverage technology to enhance our programs, like ZOOM, to allow our less ambulatory residents to be part of a gourmet club cook-off with our kitchen staff.
           </p>
          </div>
        </div>
      </section>

      <section className='communityText-section2'>
        <div className="content-wrapper">
          <div className="text-content">
            <h2>Health & Wellness</h2>
            <p>
            Expert training and attention to detail are the cornerstones of caregiving. Our staff forms tight bonds with residents and their families. They often compare caring for residents to caring for a member of their own family.
Our staff knows each resident intimately. They proactively care for residents and notice changes in their condition quickly.
A nurse is on staff to oversee and customize care plans for each resident and can communicate concerns to the primary care physician.
Available medical referral services include a shortlist of recommended primary care doctors, physical and occupational therapists, podiatrists, geriatric psychiatrists, nearby pharmacies providing free medication delivery, mobile blood work, labs, and X-ray vendors.
            </p>
          </div>
          <img src={communityTextImg2} alt="Community" className="community-hero-img" />
        </div>
      </section>

      <section className='communityText-section'>
        <div className="content-wrapper">
          <img src={communityTextImg3} alt="Community" className="community-hero-img" />
          <div className="text-content">
            <h2>Our Culture</h2>
            <p>
            At VIP Living Centers, our passion for service is what unites us. We not only serve our residents, but we also serve our employees. We put our employees first to create a supportive workplace that, in turn, better serves our residents.
We strive to create a lifestyle for our residents that is vibrant, inspiring, and purposeful. We are dedicated to nurturing every relationship, to loving and celebrating our residents and our coworkers. And because of this dedication, our standards are high. We don’t settle for less than the best.
Our commitment to our residents, families, and each other upholds the values outlined in our SERVICE affirmations.
We seek to fulfill these values every day.
           </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;