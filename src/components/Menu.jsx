import React, { useState, useEffect } from "react";
import "./style.css/menu.css"

// Rasmlarni import qilamiz
import friedEggsImg from "../assets/image/tuzum.jpg";
import hawaiianPizzaImg from "../assets/image/pizza.jpg";
import martinezCocktailImg from "../assets/image/sok.jpg";
import butterscotchCakeImg from "../assets/image/tort.jpg";
import mintLemonadeImg from "../assets/image/meva.jpg";
import chocolateIcecreamImg from "../assets/image/marozni.jpg";
import cheeseBurgerImg from "../assets/image/gamburger.jpg";
import classicWafflesImg from "../assets/image/vafli.jpg";

// JSON data
const localMenuData = [
  
  {
    id: 1,
    name: "Qovurilgan tuxum",
    price: 9.99,
    description: "Tuxum, salat, tuz, yog 'va boshqa ingredientlardan tayyorlangan.",
    category: "Breakfast",
    image: "fried-eggs.jpg",
  },
  {
    id: 2,
    name: "Gavayi pizzasi",
    price: 15.99,
    description: "Tuxum, salat, tuz, yog 'va boshqa ingredientlardan tayyorlangan.",
    category: "Main Dishes",
    image: "hawaiian-pizza.jpg",
  },
  {
    id: 3,
    name: "Martinez kokteyli",
    price: 7.25,
    description: "Tuxum, salat, tuz, yog 'va boshqa ingredientlardan tayyorlangan.",
    category: "Drinks",
    image: "martinez-cocktail.jpg",
  },
  {
    id: 4,
    name: "Sariyog 'keki",
    price: 20.99,
    description: "Tuxum, salat, tuz, yog 'va boshqa ingredientlardan tayyorlangan.",
    category: "Desserts",
    image: "butterscotch-cake.jpg",
  },
  {
    id: 5,
    name: "Yalpiz limonadi",
    price: 5.89,
    description: "Tuxum, salat, tuz, yog 'va boshqa ingredientlardan tayyorlangan.",
    category: "Drinks",
    image: "mint-lemonade.jpg",
  },
  {
    id: 6,
    name: "shokoladli muzqaymoq",
    price: 18.05,
    description: "Tuxum, salat, tuz, yog 'va boshqa ingredientlardan tayyorlangan.",
    category: "Desserts",
    image: "chocolate-icecream.jpg",
  },
  {
    id: 7,
    name: "Pishloqli burger",
    price: 12.55,
    description: "Tuxum, salat, tuz, yog 'va boshqa ingredientlardan tayyorlangan.",
    category: "Main Dishes",
    image: "cheese-burger.jpg",
  },
  {
    id: 8,
    name: "klassik vafli",
    price: 12.99,
    description: "Tuxum, salat, tuz, yog 'va boshqa ingredientlardan tayyorlangan.",
    category: "Breakfast",
    image: "classic-waffles.jpg",
  },
];

// Rasmlarni xaritada bog'lash
const imagesMap = {
  "fried-eggs.jpg": friedEggsImg,
  "hawaiian-pizza.jpg": hawaiianPizzaImg,
  "martinez-cocktail.jpg": martinezCocktailImg,
  "butterscotch-cake.jpg": butterscotchCakeImg,
  "mint-lemonade.jpg": mintLemonadeImg,
  "chocolate-icecream.jpg": chocolateIcecreamImg,
  "cheese-burger.jpg": cheeseBurgerImg,
  "classic-waffles.jpg": classicWafflesImg,
};

const categories = ["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"];

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    if (selectedCategory === "All") {
      setMenu(localMenuData);
    } else {
      setMenu(localMenuData.filter((item) => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="menu-container">
      {/* HEADER QISM */}
      <header
        className="header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 15,
          padding: "10px 20px",
          borderBottom: "1px solid #ddd",
          marginBottom: 20,
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
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Menu">Menu</a>
            </li>
            <li>
              <a href="Pages" className="active">
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
            href="/Book"
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

      {/* ASOSIY MENYU QISMI */}
      <header className="menu-header" id="menu">
        <h1>Our Menu</h1>
        <p>
          We consider all the drivers of change gives you the components you need to
          change to create a truly happens.
        </p>
      </header>

      <div className="category-buttons" style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: "8px 16px",
              borderRadius: 20,
              border: selectedCategory === cat ? "none" : "1px solid #ccc",
              backgroundColor: selectedCategory === cat ? "#a7b38a" : "white",
              color: selectedCategory === cat ? "white" : "black",
              cursor: "pointer",
              minWidth: 90,
              fontWeight: "bold",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        className="menu-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
          gap: 20,
          marginTop: 30,
        }}
      >
        {menu.length === 0 ? (
          <p style={{ textAlign: "center", gridColumn: "1/-1" }}>No items found.</p>
        ) : (
          menu.map(({ id, name, price, description, image }) => (
            <div
              key={id}
              className="menu-card"
              style={{
                border: "1px solid #ddd",
                borderRadius: 6,
                padding: 10,
                boxShadow: "0 0 8px #eee",
                backgroundColor: "white",
              }}
            >
              <img
                src={imagesMap[image]}
                alt={name}
                style={{
                  width: "100%",
                  borderRadius: 6,
                  height: 140,
                  objectFit: "cover",
                }}
              />
              <h3 style={{ color: "#b23339", marginTop: 10 }}>$ {price.toFixed(2)}</h3>
              <strong>{name}</strong>
              <p style={{ fontSize: 12, color: "#555", marginTop: 6 }}>{description}</p>
            </div>
          ))
        )}
      </div>

      <section
        style={{
          marginTop: 60,
          textAlign: "center",
          paddingBottom: 40,
          backgroundColor: "#fafaf6",
          paddingTop: 40,
          borderRadius: 10,
          boxShadow: "0 0 15px #eee",
          maxWidth: 800,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h2>You can order through apps</h2>
        <p style={{ maxWidth: 400, margin: "10px auto", color: "#555" }}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 130px)",
            gap: 12,
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {[
            "Uber Eats",
            "GRUBHUB",
            "Postmates",
            "DOORDASH",
            "foodpanda",
            "deliveroo",
            "instacart",
            "JUST EAT",
            "DiDi Food",
          ].map((app) => (
            <button
              key={app}
              style={{
                padding: 12,
                borderRadius: 6,
                border: "1px solid #ddd",
                fontWeight: "bold",
                cursor: "pointer",
                backgroundColor: "white",
                boxShadow: "0 0 8px #eee",
                textTransform: "uppercase",
              }}
            >
              {app}
            </button>
          ))}
        </div>
      </section>

      <footer
  style={{
    backgroundColor: "#3a3a3a",
    color: "white",
    marginTop: 80,
    padding: "40px 20px",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 1.6,
  }}
>
  <div style={{ maxWidth: 1000, margin: "auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 20 }}>
    {/* Kompaniya haqida */}
    <div style={{ flex: "1 1 250px", textAlign: "left" }}>
      <h3 style={{ marginBottom: 12, color: "#a7b38a" }}>Hashtag Developer</h3>
      <p>
        Biz eng sifatli taomlarni yetkazib beramiz. Mijozlarimizning mamnunligi biz uchun eng muhimdir.
      </p>
      <p>Manzil: Toshkent sh., O'zbekiston</p>
      <p>Telefon: +998 90 123 45 67</p>
      <p>Email: info@hashtagdeveloper.uz</p>
    </div>

    {/* Sayt bo'limlari */}
    <div style={{ flex: "1 1 150px", textAlign: "left" }}>
      <h4 style={{ marginBottom: 12, color: "#a7b38a" }}>Sayt bo‘limlari</h4>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><a href="#menu" style={{ color: "white", textDecoration: "none" }}>Menyu</a></li>
        <li><a href="#order" style={{ color: "white", textDecoration: "none" }}>Buyurtma berish</a></li>
        <li><a href="#contact" style={{ color: "white", textDecoration: "none" }}>Aloqa</a></li>
        <li><a href="#about" style={{ color: "white", textDecoration: "none" }}>Biz haqimizda</a></li>
      </ul>
    </div>

    {/* Ijtimoiy tarmoqlar */}
    <div style={{ flex: "1 1 200px", textAlign: "left" }}>
      <h4 style={{ marginBottom: 12, color: "#a7b38a" }}>Ijtimoiy tarmoqlar</h4>
      <div style={{ display: "flex", gap: 15, fontSize: 24 }}>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }} aria-label="Facebook">
          <i className="fab fa-facebook-f"></i> {/* FontAwesome ikoni */}
          {/* Agar sizda FontAwesome o'rnatilmagan bo'lsa, rasmlar yoki SVG ishlatishingiz mumkin */}
          FB
        </a>
        <a href="https://x.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }} aria-label="Twitter">
          <i className="fab fa-twitter"></i>
          TW
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }} aria-label="Instagram">
          <i className="fab fa-instagram"></i>
          IG
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }} aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
          IN
        </a>
      </div>
    </div>
  </div>

  <hr style={{ margin: "30px auto", borderColor: "#555", maxWidth: 1000 }} />

  <p style={{ fontSize: 13, color: "#bbb" }}>
    Copyright © 2023 Hashtag Developer. All Rights Reserved.
  </p>
</footer>
    </div>
  );
}
