import React from 'react';
import './style.css/book.css';

const BookTable = () => {
  return (
    <div className="book-table-container">
      {/* Top Bar */}
      <div className="top-bar">
        <p>(414) 857 – 0107</p>
        <p>yummy@bistrobliss</p>
      </div>
      

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">🍽️ Bistro Bliss</div>
        <ul className="nav-links">
        <li>
                <a href="/">Home</a>
             </li>
            <li>
               <a href="About">About</a> 
            </li>
            <li>
                <a href="Menu">Menu</a>
            </li>
            <li>
               <a href="Pages">Pages</a>
            </li>
            <li>
               <a href="#">Contact</a>
            </li>
            
        </ul>
        <button className="book-btn">Book A Table</button>
      </nav>

      {/* Title */}
      <div className="title-section">
        <h1>Book A Table</h1>
        <p>
          We consider all the drivers of change gives you the components
          you need to change to create a truly happens.
        </p>
      </div>

      {/* Booking Form */}
      <div className="booking-form-container">
        <form className="booking-form">
          <div className="form-row">
            <input type="date" required />
            <select required>
              <option value="">Select Time</option>
              <option>06:00 PM</option>
              <option>06:30 PM</option>
              <option>07:00 PM</option>
              <option>07:30 PM</option>
            </select>
          </div>
          <div className="form-row">
            <input type="text" placeholder="Enter your name" required />
            <input type="tel" placeholder="x-xxx-xxx-xxxx" required />
          </div>
          <div className="form-row">
            <select required>
              <option value="">Total Person</option>
              <option>1 Person</option>
              <option>2 People</option>
              <option>3 People</option>
              <option>4+ People</option>
            </select>
          </div>
          <button type="submit">Book A Table</button>
        </form>
      </div>

      {/* Map (Fake image or Google static map) */}
      <div className="map-section">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Map_placeholder.png"
          alt="Map"
        />
      </div>

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
              <div className="gallery-img"></div>
              <div className="gallery-img"></div>
              <div className="gallery-img"></div>
              <div className="gallery-img"></div>
              <div className="gallery-img"></div>
              <div className="gallery-img"></div>
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

export default BookTable;