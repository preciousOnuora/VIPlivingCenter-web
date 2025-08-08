import React, { useEffect, useState } from 'react';
import { Home, User, Settings, Mail, Info } from 'lucide-react';
import './Footer.css';
import { Link, useLocation } from 'react-router-dom';

const Footer = ({ isOpen, toggleSidebar, currentPage, ToggleEvent }) => {
  const location = useLocation();

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [footerFormData, setFooterFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleLinkClick = () => {
    if (ToggleEvent) {
      ToggleEvent();
    }
  };

  const handleFooterFormChange = (e) => {
    setFooterFormData({
      ...footerFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleFooterSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5001/api/footer-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(footerFormData)
      });
      
      const result = await response.json();
      
      if (result.success) {
        alert(result.message);
        setFooterFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  const navItems = [
    { icon: Settings, label: 'Services', href: '/services' },
    { icon: User, label: 'Community & Activities', href: '/community' },
    { icon: Info, label: 'FAQs', href: '/faqs' },
    { icon: Home, label: 'Careers', href: '/careers' },
    { icon: User, label: 'About', href: '/about' },
    { icon: Mail, label: 'Contact', href: '/contact' },
  ];

  return (
    <>
    <section className='footerAddress'>
        <h3>VIP Living Centers — 3219 Vinson Ct, Irving, TX 75060</h3>
    </section>

    <section className='mainFooter'>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href} onClick={handleLinkClick}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Phone: (972) 513-0224</p>
          <p>Email: viplc.management@gmail.com</p>
          <p>Hours: 24/7 Care Available</p>
        </div>
        
        <div className="footer-section">
          <form onSubmit={handleFooterSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                value={footerFormData.name}
                onChange={handleFooterFormChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={footerFormData.email}
                onChange={handleFooterFormChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone" 
                value={footerFormData.phone}
                onChange={handleFooterFormChange}
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Message" 
                rows="3" 
                value={footerFormData.message}
                onChange={handleFooterFormChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </section>

    <section className='copyright'>
      <p> ©2025 VIP Living Centers, LLC. All rights reserved. <Link to="/policies" style={{color: 'white'}}>Privacy Policy</Link> </p>
    </section>
    </>
  );
};

export default Footer;