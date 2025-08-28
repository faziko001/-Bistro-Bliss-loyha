import React from 'react';
import './style.css/contact.css';
import oop from '../assets/image/oop.png'
import h from '../assets/image/h.png' 
import gg from '../assets/image/gg.png'
import fff from '../assets/image/fff.png'


const Contact = () => {
  return (
    <div className="contact-container">
      {/* Header */}
      
      <header className="header">
        <div className="container">
          {/* Logo */}
          <div className="logo">
            <h2>Bistro Bliss</h2>
          </div>

          {/* Navigation Menu */}
          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <a href="/" className="nav-link">
              Home
            </a>
            <a href="About" className="nav-link">
              About
            </a>
            <a href="Menu" className="nav-link active">
              Menu
            </a>
            <a href="Pages" className="nav-link">
              Pages
            </a>
            <a href="#" className="nav-link">
              Contact
            </a>
          </nav>

          {/* Book A Table Button */}
          <a href="Book">
          <button className="book-table-btn">Book A Table</button>
          </a>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      {/* Form Section */}
      <section className="form-section">
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Enter your name" required />
            <input type="email" placeholder="Enter email address" required />
          </div>
          <input type="text" placeholder="Write a subject" required />
          <textarea placeholder="Write your message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="info-box">
          <h4>Call Us:</h4>
          <p className="highlight">+1-234-567-8900</p>
        </div>
        <div className="info-box">
          <h4>Hours:</h4>
          <p>Mon-Fri: 11am – 8pm</p>
          <p>Sat, Sun: 9am – 10pm</p>
        </div>
        <div className="info-box">
          <h4>Our Location:</h4>
          <p>123 Bridge Street</p>
          <p>Nowhere Land, LA 12345</p>
          <p>United States</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">🍽️ Bistro Bliss</div>
            <p>
              In the new era of technology we look in the future with
              certainty and pride for our company and.
            </p>
            <div className="social-icons">
              <span>🐦</span>
              <span>📘</span>
              <span>📸</span>
              <span>📌</span>
            </div>
          </div>
          <div className="footer-links">
            <h5>Pages</h5>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Delivery</li>
            </ul>
          </div>
          <div className="footer-links">
            <h5>Utility Pages</h5>
            <ul>
              <li>Start Here</li>
              <li>Styleguide</li>
              <li>Password Protected</li>
              <li>404 Not Found</li>
              <li>Licenses</li>
              <li>Changelog</li>
              <li>View More</li>
            </ul>
          </div>
          <div className="footer-gallery">
            <h5>Follow Us On Instagram</h5>
            <div className="gallery">
              <img src={oop}alt="" />
              <img src={h} alt="" />
              <img src={gg} alt="" />
              <img src={fff} alt="" />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;