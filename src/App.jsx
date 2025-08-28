import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Menu from "./components/Menu"
import Pages from "./components/Pages"
import BookTable from "./components/Book"
import Contact from "./components/Contact"



function App() {
return (
  <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="Pages" element={<Pages />} />
          <Route path="Book" element={<BookTable />} />
          <Route path="Contact" element={<Contact />} />

        </Routes>
    </BrowserRouter>
  </>
)
}

export default App
