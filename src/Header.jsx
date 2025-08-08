import React from 'react';
import { Menu, X, Home, User, Settings, Mail, Info } from 'lucide-react';
import './Header.css';
import logo from './Images/image2.png';
import { Link } from 'react-router-dom';

const Header = ({ isOpen, toggleSidebar, currentPage, ToggleEvent }) => {
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
      {/* Dark overlay that appears behind sidebar when open */}
      {isOpen && (
        <div 
          className="sidebar-overlay"
          onClick={toggleSidebar}
        />
      )}

      {/* Fixed header bar at top of page */}
      <header className="header">
        <div className="header-content">
          <div className="header-spacer"></div>

          {/* Logo that links to home */}
          <div className="header-image">
            <Link to="/">
              <img 
                src={logo} 
                alt="logo" 
                width="65" 
                height="60" 
                className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              />
            </Link>
          </div>

          {/* Button that triggers your event */}
          <div className="header-button">
            <Link to="/contact">
              <button
                className="stay-with-us-button"
                aria-label="Application form"
              >
                Stay with us
              </button>
            </Link>
          </div>

          {/* Hamburger menu toggle */}
          <button
            onClick={toggleSidebar}
            className="hamburger-button"
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <X className="hamburger-icon" />
            ) : (
              <Menu className="hamburger-icon" />
            )}
          </button>
        </div>
      </header>

      {/* Sidebar navigation */}
      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-header">
            <h2 className="sidebar-title">Menu</h2>
            <button
              onClick={toggleSidebar}
              className="sidebar-close-button"
              aria-label="Close navigation"
            >
              <X className="hamburger-icon" />
            </button>
          </div>

          <ul className="sidebar-nav">
            {navItems.map((item, index) => (
              <li key={index} className="sidebar-nav-item">
                <Link
                  to={item.href}
                  className="sidebar-nav-link"
                  onClick={toggleSidebar}
                >
                  <item.icon className="sidebar-nav-icon" />
                  <span className="sidebar-nav-text">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;