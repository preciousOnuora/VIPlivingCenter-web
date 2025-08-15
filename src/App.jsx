// App.js
/*
 * Main application component that:
 * - Manages the sidebar open/closed state
 * - Renders the Header component with navigation
 * - Contains the main content area that shifts when sidebar opens
 * - Includes sample content sections and feature cards
 * - Handles responsive layout for different screen sizes
 */

import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Service from './Service.jsx';
import Community from './Community.jsx';
import FAQs from './FAQs.jsx';
import Careers from './Careers.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx';
import Policies from './Policies.jsx';
import './App.css';
// import homeImg from './Images/homeImage.jpg';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Component to handle scroll to top on route changes
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <ScrollToTop />
      <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <main className={`main-content ${isOpen ? 'sidebar-open' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />           {/* 👈 Add this for the homepage */}
          <Route path="/services" element={<Service />} />
          <Route path="/community" element={<Community />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policies" element={<Policies />} />
        </Routes>
      </main>

      <Footer isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </Router>
  );
};

export default App;