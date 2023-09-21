import React, { useState } from 'react'
import logo from '../assets/Logo.svg'
import Navigation from "./Navigation";
import Hamburger from "../assets/hamburger.png";
import Close from "../assets/close.png";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }
  return (
    <nav>
      <nav className="burger">
        <img src={logo} alt="Little Lemon logo" className="nav-image" />

        <button className="burger-icon" onClick={handleToggle}>
          <img src={navbarOpen ? Close : Hamburger} alt="Navigation Bar" />
        </button>
      </nav>
      <Navigation device="desktop" />
      {navbarOpen ? <Navigation device="mobile" /> : ""}
    </nav>
  )
}

export default Navbar
