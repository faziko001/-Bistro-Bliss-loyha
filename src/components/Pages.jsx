import React, { useState } from "react";
import "./style.css/pages.css";
import ag from "../assets/image/ag.png";
import h from "../assets/image/h.png";
import G from "../assets/image/G.png";
import BBBB from "../assets/image/BBBB.png";
import D from "../assets/image/D.png";
import oop from "../assets/image/oop.png";
import gg from "../assets/image/gg.png";
import fff from "../assets/image/fff.png";
import sadj from "../assets/image/sadj.png";
import sour from "../assets/image/sour.png";

const categories = [
  "Hero",
  "Burger Tips",
  "Pizza Ingredients",
  "Full Image",
  "More Articles",
];

const contentData = {
  Hero: (
    <>
      <h1>
        The secret tips & tricks to prepare a perfect burger & pizza for our
        customers
      </h1>
      <div
        className="hero-images"
        style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 20 }}
      >
        <img
          src={ag}
          alt="Dish left"
          style={{ maxWidth: 200, borderRadius: 8 }}
        />
        <img
          src={h}
          alt="Main dish"
          style={{ maxWidth: 200, borderRadius: 8 }}
        />
      </div>
    </>
  ),

  "Burger Tips": (
    <>
      <h2>What do you need to prepare a home–made burger?</h2>
      <p>
        Creating the perfect burger and pizza is an art, combining ingredients,
        techniques, and passion to craft dishes that truly delight the palate.
      </p>
      <ol>
        <li>
          <strong>Quality Beef:</strong> Fresh, high-quality ground beef with ~20%
          fat.
        </li>
        <li>
          <strong>Seasoning:</strong> Just salt and pepper.
        </li>
        <li>
          <strong>Don’t Overwork:</strong> Lightly form patties.
        </li>
        <li>
          <strong>High Heat:</strong> Sear quickly to lock in juice.
        </li>
        <li>
          <strong>Resting:</strong> Let it sit before serving.
        </li>
      </ol>
    </>
  ),

  "Pizza Ingredients": (
    <>
      <h2>What are the right ingredients to make it delicious?</h2>
      <p>Learn the secrets to making the most delicious burgers and pizzas at home.</p>
      <ol>
        <li>Start with the freshest ingredients</li>
        <li>Balance of cheese, sauce, and dough</li>
        <li>Cook with the right temperature</li>
        <li>Use herbs and seasoning moderately</li>
        <li>Always taste as you go</li>
      </ol>
    </>
  ),

  "Full Image": (
    <>
      <section
        className="image-section"
        style={{ textAlign: "center", marginTop: 20 }}
      >
        <img
          src={ag}
          alt="Fries and Burger"
          className="full-width-image"
          style={{ width: "100%", maxWidth: 600, borderRadius: 10 }}
        />
        <h3 style={{ marginTop: 15 }}>
          What are the right ingredients to make it delicious?
        </h3>
        <p style={{ maxWidth: 600, margin: "auto", color: "#555" }}>
          Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed
          eget viverra egestas nisi in consequat. Fusce sodales augue a accumsan.
        </p>
      </section>
    </>
  ),

  "More Articles": (
    <>
      <h2>Read More Articles</h2>
      <p>
        We consider all the drivers of change gives you the components you need
        to change.
      </p>

      <div
        className="article-cards"
        style={{
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        {[
          {
            img: G,
            alt: "Sushi",
            title: "How to prepare a delicious gluten free sushi",
          },
          {
            img: BBBB,
            alt: "Baking",
            title: "Exclusive baking lessons from the pastry king",
          },
          {
            img: ag,
            alt: "Fries",
            title: "How to prepare the perfect fries in an air fryer",
          },
          {
            img: D,
            alt: "Tenders",
            title: "How to prepare delicious chicken tenders",
          },
        ].map(({ img, alt, title }, idx) => (
          <div
            key={idx}
            className="card"
            style={{
              width: 250,
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 10,
              boxShadow: "0 0 8px #eee",
              backgroundColor: "white",
            }}
          >
            <img
              src={img}
              alt={alt}
              style={{
                width: "100%",
                borderRadius: 6,
                height: 140,
                objectFit: "cover",
              }}
            />
            <p
              style={{
                color: "#999",
                fontSize: 12,
                marginTop: 6,
              }}
            >
              January 3, 2023
            </p>
            <h4 style={{ color: "#b23339" }}>{title}</h4>
          </div>
        ))}
      </div>
    </>
  ),
};

const Pages = () => {
  const [selectedCategory, setSelectedCategory] = useState("Hero");

  return (
    <div
      className="pages-container"
      style={{
        maxWidth: 900,
        margin: "40px auto",
        padding: 20,
        fontFamily: "serif",
      }}
    >
      {/* Header */}
      <header
        className="header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 15,
        }}
      >
        <div className="logo" style={{ fontWeight: "bold", fontSize: 22 }}>
          🍽️ Bistro Bliss
        </div>
        <nav className="navbar">
          <ul
            style={{
              display: "flex",
              gap: 15,
              listStyle: "none",
              padding: 0,
              margin: 0,
              flexWrap: "wrap",
            }}
          >
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
              <a href="#" className="active">
                Pages
              </a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="book-btn">
          <a
            href="Book"
            style={{
              backgroundColor: "#a7b38a",
              color: "white",
              padding: "8px 16px",
              borderRadius: 20,
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Book A Table
          </a>
        </div>
      </header>

      {/* Category Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 15,
          marginTop: 30,
          marginBottom: 30,
          flexWrap: "wrap",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: "10px 22px",
              borderRadius: 20,
              border: selectedCategory === cat ? "none" : "1px solid #ccc",
              backgroundColor: selectedCategory === cat ? "#a7b38a" : "white",
              color: selectedCategory === cat ? "white" : "black",
              cursor: "pointer",
              fontWeight: "bold",
              minWidth: 140,
              fontSize: 16,
              transition: "0.3s",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Selected Content */}
      <main>{contentData[selectedCategory]}</main>

      {/* Footer */}
      <footer
        className="footer"
        style={{
          marginTop: 60,
          backgroundColor: "#3a3a3a",
          color: "white",
          padding: "40px 20px",
          fontSize: 14,
          lineHeight: 1.6,
          borderRadius: 10,
          boxShadow: "0 0 15px #eee",
        }}
      >
        <div
          className="footer-content"
          style={{
            maxWidth: 900,
            margin: "auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <div style={{ flex: "1 1 250px", textAlign: "left" }}>
            <h3 style={{ marginBottom: 12, color: "#a7b38a" }}>
              🍽️ Bistro Bliss
            </h3>
            <p>
              In the new era of technology we look in the future with certainty
              and pride.
            </p>
            <div
              className="social-icons"
              style={{ display: "flex", gap: 15, fontSize: 24, marginTop: 10 }}
            >
              <a href="#" style={{ color: "white" }}>
                <i className="fab fa-twitter"></i>🐦
              </a>
              <a href="#" style={{ color: "white" }}>
                <i className="fab fa-facebook"></i>📘
              </a>
              <a href="#" style={{ color: "white" }}>
                <i className="fab fa-instagram"></i>📸
              </a>
              <a href="#" style={{ color: "white" }}>
                <i className="fab fa-pinterest"></i>📌
              </a>
            </div>
          </div>

          <div style={{ flex: "1 1 150px" }}>
            <h4 style={{ borderBottom: "1px solid #777", paddingBottom: 8 }}>
              Pages
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>
                <a href="/" style={{ color: "white", textDecoration: "none" }}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" style={{ color: "white", textDecoration: "none" }}>
                  About
                </a>
              </li>
              <li>
                <a href="/menu" style={{ color: "white", textDecoration: "none" }}>
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a href="/blog" style={{ color: "white", textDecoration: "none" }}>
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/delivery"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Delivery
                </a>
              </li>
            </ul>
          </div>

          <div style={{ flex: "1 1 150px" }}>
            <h4 style={{ borderBottom: "1px solid #777", paddingBottom: 8 }}>
              Utility Pages
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Start Here
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Styleguide
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Password Protected
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  404 Not Found
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Licenses
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Changelog
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  View More
                </a>
              </li>
            </ul>
          </div>

          <div style={{ flex: "1 1 200px" }}>
            <h4 style={{ borderBottom: "1px solid #777", paddingBottom: 8 }}>
              Follow Us On Instagram
            </h4>
            <div
              className="gallery-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 8,
                marginTop: 10,
              }}
            >
              <img
                src={oop}
                alt="Food"
                style={{ width: "100%", borderRadius: 6, height: 80, objectFit: "cover" }}
              />
              <img
                src={h}
                alt="Food"
                style={{ width: "100%", borderRadius: 6, height: 80, objectFit: "cover" }}
              />
              <img
                src={gg}
                alt="Food"
                style={{ width: "100%", borderRadius: 6, height: 80, objectFit: "cover" }}
              />
              <img
                src={fff}
                alt="Food"
                style={{ width: "100%", borderRadius: 6, height: 80, objectFit: "cover" }}
              />
              <img
                src={sadj}
                alt="Food"
                style={{ width: "100%", borderRadius: 6, height: 80, objectFit: "cover" }}
              />
              <img
                src={sour}
                alt="Food"
                style={{ width: "100%", borderRadius: 6, height: 80, objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div
          className="footer-bottom"
          style={{ marginTop: 30, textAlign: "center", color: "#bbb" }}
        >
          <p>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Pages;
