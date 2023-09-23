import React from 'react';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className='container-fluid d-flex justify-content-center py-5'>
      <section className=' row gap-5'>

        <nav className="nav flex-column col-lg-auto">
          <Link className="nav-link " href="/"><img src={require("../assets/footer-logo.png")} alt="Little Lemon logo" /></Link>

        </nav>

        <nav className="nav flex-column col-lg-auto">
          <h1 className="footer-header">Navigation</h1>
          <Link className="nav-link " href="/">Home</Link>
          <Link className="nav-link" href="/">About</Link>
          <Link className="nav-link" href={require("../assets/menu.webp")} target="_blank" rel="noreferrer">Menu</Link>
          <Link className="nav-link " href='/'>Reservations</Link>
          <Link className="nav-link " href='/'>Order</Link>
          <Link className="nav-link " href='/'>Login</Link>
        </nav>

        <nav className="nav flex-column col-lg-auto">
          <h1 className="footer-header">Contact</h1>
          <ul className="nav flex-column gap-2">
            <li className="nav-item ">2395 Maldove Way,</li>
            <li className='nav-item'>Chicago Illinois</li>
            <li className='nav-item'>(629)-243-6827</li>
            <li className='nav-item'>
              <a className="nav-link" href="mailto: info@littlelemon.com" target="_blank" rel="noreferrer" >info@littlelemon.com</a>
            </li>
          </ul>
        </nav>

        <nav className="nav flex-column col-lg-auto">
          <h1 className="footer-header">Connect</h1>
          <Link className="nav-link " to="https://www.facebook.com/thelittlelemonshop/" target="_blank" rel="noreferrer">Facebook</Link>
          <Link className="nav-link" to="https://www.instagram.com/littlelemonmoon/" target="_blank" rel="noreferrer">Instagram</Link>
          <Link className="nav-link" to="/" target="_blank" rel="noreferrer">Join us</Link>
        </nav>
      </section>

    </footer>
  )
}

export default Footer