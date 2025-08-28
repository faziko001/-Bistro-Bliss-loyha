"use client"

import { useState } from "react"
import "./style.css/about.css"
import iui from '../assets/image/iui.png'
import ty from '../assets/image/ty.png'
import ghj from '../assets/image/ghj.png'
import Ellipse from '../assets/image/Ellipse.png'
import imag from '../assets/image/imag.png'
import oop from '../assets/image/oop.png'
import h from '../assets/image/h.png' 
import gg from '../assets/image/gg.png'
import fff from '../assets/image/fff.png'
import sadj from '../assets/image/sadj.png'
import sour from '../assets/image/sour.png'


const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="about-page">
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
            <a href="#" className="nav-link active">
              About
            </a>
            <a href="Menu" className="nav-link">
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

      {/* Hero About Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-hero-image">
              <img 
                src={iui}
                alt="Chef preparing healthy food" 
                className="hero-food-image"
              />
            </div>
            <div className="about-hero-text">
              <h1>We provide healthy food for your family.</h1>
              <p>
                Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local community while delivering a memorable dining experience.
              </p>
              <p>
                At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
              </p>
              
              {/* Contact Info Box */}
              <div className="contact-info-box">
                <h3>Come and visit us</h3>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>(414) 857 - 0107</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span>happytummy@restaurant.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="video-overlay">
          <div className="container">
            <div className="video-content">
              <button className="play-button">
                <span className="play-icon">▶</span>
              </button>
              <h2>Feel the authentic & original taste from us</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <span>🍽️</span>
              </div>
              <h3>Multi Cuisine</h3>
              <p>In the new era of technology we look in the future with certainty life.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span>📋</span>
              </div>
              <h3>Easy To Order</h3>
              <p>In the new era of technology we look in the future with certainty life.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span>🚚</span>
              </div>
              <h3>Fast Delivery</h3>
              <p>In the new era of technology we look in the future with certainty life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="info-section">
        <div className="container">
          <div className="info-content">
            <div className="info-text">
              <h2>A little information for our valuable guest</h2>
              <p>
                At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
              </p>
              
              {/* Statistics */}
              <div className="stats-grid">
                <div className="stat-item">
                  <h3>3</h3>
                  <p>Locations</p>
                </div>
                <div className="stat-item">
                  <h3>1995</h3>
                  <p>Founded</p>
                </div>
                <div className="stat-item">
                  <h3>65+</h3>
                  <p>Staff Members</p>
                </div>
                <div className="stat-item">
                  <h3>100%</h3>
                  <p>Satisfied Customers</p>
                </div>
              </div>
            </div>
            <div className="info-image">
              <img 
                src={ty}
                alt="Chef preparing fresh food" 
                className="cooking-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <h3>"The best restaurant"</h3>
              <p>
                Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.
              </p>
              <div className="testimonial-author">
                <img src={ghj} alt="Sophire Robson" />
                <div className="author-info">
                  <h4>Sophire Robson</h4>
                  <span>Los Angeles, CA</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <h3>"Simply delicious"</h3>
              <p>
                Place exceeded my expectations on all levels. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.
              </p>
              <div className="testimonial-author">
                <img src={Ellipse} alt="Matt Cannon" />
                <div className="author-info">
                  <h4>Matt Cannon</h4>
                  <span>San Diego, CA</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <h3>"One of a kind restaurant"</h3>
              <p>
                The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.
              </p>
              <div className="testimonial-author">
                <img src={imag} alt="Andy Smith" />
                <div className="author-info">
                  <h4>Andy Smith</h4>
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Bistro Bliss</h3>
              <p>In the new era of technology we look in the future with certainty and pride to for our company and.</p>
              <div className="social-links">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">📷</a>
                <a href="#" className="social-link">📺</a>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4>Pages</h4>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#menu">Menu</a>
                <a href="#pages">Pages</a>
                <a href="#contact">Contact</a>
                <a href="#">Delivery</a>
              </div>
              <div className="footer-column">
                <h4>Utility Pages</h4>
                <a href="#">Start Here</a>
                <a href="#">Styleguide</a>
                <a href="#">Password Protected</a>
                <a href="#">404 Not Found</a>
                <a href="#">Licenses</a>
                <a href="#">Changelog</a>
              </div>
            </div>
            
            <div className="footer-images">
              <h4>Follow Us On Instagram</h4>
              <div className="instagram-grid">
                <img src={oop} alt="Food" />
                <img src={h}  alt="Food" />
                <img src={gg}alt="Food" />
                <img src={fff}  alt="Food" />
                <img src={sour} alt="Food" />
                <img src={sadj}  alt="Food" />
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Copyright © 2023 Hashtag Developer. All rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default About
