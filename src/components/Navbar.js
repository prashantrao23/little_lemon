import React from 'react'
import logo from '../assets/Logo.svg'

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src={logo} alt="logo" />
        </div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Reservation</a></li>
            <li><a href="/">Order online</a></li>
            <li><a href="/">Login</a></li>
        </ul>
    </nav>
  )
}

export default Navbar