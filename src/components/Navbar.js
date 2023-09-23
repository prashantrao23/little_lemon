import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from "react-router-dom";


const Navbar = () => {
  
  return (
   <nav className="navbar navbar-expand-lg bg-body-tertiary mx-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src={logo} alt="Little Lemon logo" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <menu className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reservations">Reservation</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/order">Order</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>

          </ul>

        </menu>
      </div>
    </nav>
  )
}

export default Navbar
