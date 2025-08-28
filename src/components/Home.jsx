import { useEffect, useState } from "react";
import "./style.css/home.css";

// Rasm importlari (sizning rasm yo'llaringizni saqladim)
import img from "../assets/image/img.png";
import kebab from "../assets/image/kebab.png";
import group from "../assets/image/group.png";
import Moup from "../assets/image/Moup.png";
import Mask from "../assets/image/Mask.png";
import mid from "../assets/image/mid.png";
import sour from "../assets/image/sour.png";
import ghj from "../assets/image/ghj.png";
import Ellipse from "../assets/image/Ellipse.png";
import imag from "../assets/image/imag.png";
import da from "../assets/image/da.png";
import gdfg from "../assets/image/gdfg.png";
import iop from "../assets/image/iop.png";
import hjgjfgh from "../assets/image/hjgjfgh.png";
import iopop from "../assets/image/iopop.png";
import oop from "../assets/image/oop.png";
import h from "../assets/image/h.png";
import gg from "../assets/image/gg.png";
import fff from "../assets/image/fff.png";
import sadj from "../assets/image/sadj.png";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Backenddan kelgan menyu ma'lumotlari
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Backend API manzilingizni shu yerga yozing
    fetch("https://api.example.com/menu")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Serverdan xato javob keldi");
        }
        return response.json();
      })
      .then((data) => {
        setMenuItems(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <h2>Bistro Bliss</h2>
          </div>
          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <a href="#" className="nav-link active">
              Home
            </a>
            <a href="About" className="nav-link">
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
          <a href="Book">
            <button className="book-table-btn">Book A Table</button>
          </a>
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Best food for your taste</h1>
              <p>
                Discover delectable cuisine and unforgettable moments in our
                welcoming, culinary haven.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary">Book A Table</button>
                <button className="btn-secondary">Explore Menu</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="browse-menu">
        <div className="container">
          <h2>Browse Our Menu</h2>

          {/* Loading holati */}
          {loading && <p>Loading menu...</p>}

          {/* Xato holati */}
          {error && <p style={{ color: "red" }}>Error: {error}</p>}

          {/* Menu ma'lumotlari kelgan bo'lsa */}
          {!loading && !error && (
            <div className="menu-grid">
              {menuItems.length === 0 ? (
                <p>No menu items available</p>
              ) : (
                menuItems.map((item) => (
                  <div className="menu-card" key={item.id}>
                    <div className="menu-icon">{item.icon || "🍽️"}</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a href={item.link || "#"} className="explore-menu">
                      Explore Menu
                    </a>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>We provide healthy food for your family.</h2>
              <p>
                Our story began with a vision to create a unique dining
                experience that merges fine dining, exceptional service, and a
                vibrant ambiance.
              </p>
              <p>
                We believe that dining is not just about food, but also about
                the overall experience.
              </p>
              <button className="btn-secondary">More About Us</button>
            </div>
            <div className="about-image">
              <img src={img} alt="Healthy Food" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="pages" className="services">
        <div className="container">
          <h2>We also offer unique services for your events</h2>
          <div className="services-grid">
            <div className="service-card">
              <img src={kebab} alt="Catering" />
              <div className="service-content">
                <h3>Catering</h3>
                <p>Perfect meals for your special occasions.</p>
              </div>
            </div>
            <div className="service-card">
              <img src={group} alt="Birthday" />
              <div className="service-content">
                <h3>Birthdays</h3>
                <p>Celebrate your birthday in style.</p>
              </div>
            </div>
            <div className="service-card">
              <img src={Moup} alt="Wedding" />
              <div className="service-content">
                <h3>Weddings</h3>
                <p>Make your wedding day unforgettable.</p>
              </div>
            </div>
            <div className="service-card">
              <img src={Mask} alt="Events" />
              <div className="service-content">
                <h3>Events</h3>
                <p>We handle your events professionally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="delivery">
        <div className="container">
          <div className="delivery-content">
            <div className="delivery-images">
              <img src={mid} alt="Chef" className="chef-img" />
              <img src={sour} alt="Food" className="food-img" />
            </div>
            <div className="delivery-text">
              <h2>Fastest Food Delivery in City</h2>
              <p>Quick delivery with delicious meals.</p>
              <div className="delivery-features">
                <div className="feature">
                  <span>⏰</span> Delivery within 30 minutes
                </div>
                <div className="feature">
                  <span>💰</span> Best offers & prices
                </div>
                <div className="feature">
                  <span>🛒</span> Online services available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <h3>"The best restaurant"</h3>
              <p>
                Biz kecha bu joyda ovqatlandik va hayratda qoldik. Atmosfera va
                xizmat ajoyib edi.
              </p>
              <div className="testimonial-author">
                <img src={ghj} alt="Sophire Robson" />
                <div>
                  <h4>Sophire Robson</h4>
                  <span>Los Angeles, CA</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <h3>"Simply delicious"</h3>
              <p>
                Joy juda qulay va rohatli, har bir taom chiroyli tayyorlangan
                va mazali edi.
              </p>
              <div className="testimonial-author">
                <img src={Ellipse} alt="Matt Cannon" />
                <div>
                  <h4>Matt Cannon</h4>
                  <span>San Diego, CA</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <h3>"One of a kind restaurant"</h3>
              <p>Taomlar juda zo‘r! Atmosfera ajoyib. Barchaga tavsiya qilaman.</p>
              <div className="testimonial-author">
                <img src={imag} alt="Andy Smith" />
                <div>
                  <h4>Andy Smith</h4>
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="blog">
        <div className="container">
          <div className="blog-header">
            <h2>Our Blog & Articles</h2>
            <button className="btn-primary">Read All Articles</button>
          </div>
          <div className="blog-grid">
            <div className="blog-featured">
              <img src={da} alt="Perfect Burger" className="blog-img" />
              <div className="blog-content">
                <span className="blog-date">January 3, 2023</span>
                <h3>Perfect burger & pizza tayyorlash bo‘yicha sirli maslahatlar</h3>
                <p>
                  Lorem ipsum dolor sit amet, elit adipiscing. Gravida nisi
                  cras enim varius facilisis.
                </p>
              </div>
            </div>
            <div className="blog-sidebar">
              <div className="blog-small">
                <img src={gdfg} alt="French Fries" />
                <div className="blog-small-content">
                  <span className="blog-date">January 3, 2023</span>
                  <h4>Air fryerda mukammal kartoshka tayyorlash</h4>
                </div>
              </div>
              <div className="blog-small">
                <img src={iop} alt="Chicken Tenders" />
                <div className="blog-small-content">
                  <span className="blog-date">January 3, 2023</span>
                  <h4>Mazali tovuq bo‘lakchalari tayyorlash</h4>
                </div>
              </div>
              <div className="blog-small">
                <img src={hjgjfgh} alt="Burger Pizza" />
                <div className="blog-small-content">
                  <span className="blog-date">January 3, 2023</span>
                  <h4>Mukammal burger & pizza tayyorlash sirlari</h4>
                </div>
              </div>
              <div className="blog-small">
                <img src={iopop} alt="Gluten Free Sushi" />
                <div className="blog-small-content">
                  <span className="blog-date">January 3, 2023</span>
                  <h4>Glutensiz suşi qanday tayyorlanadi?</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Bistro Bliss</h3>
              <p>Biz texnologiya asrida ishonch va g‘urur bilan kelajakka qaraymiz.</p>
              <div className="social-links">
                <a href="#" className="social-link">
                  📘
                </a>
                <a href="#" className="social-link">
                  🐦
                </a>
                <a href="#" className="social-link">
                  📷
                </a>
                <a href="#" className="social-link">
                  📺
                </a>
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
                <img src={h} alt="Food" />
                <img src={gg} alt="Food" />
                <img src={fff} alt="Food" />
                <img src={sour} alt="Food" />
                <img src={sadj} alt="Food" />
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>Copyright © 2023 Bistro Bliss. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;