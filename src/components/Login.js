import HeroImage from "../assets/food/food4.webp";
import React from 'react'

const Login = () => {
  return (
    <header className="reserve-table">
      <img className="header-reserve" src={HeroImage} alt="Little Lemon Ingredients" />
      <div className="reserve-header-text">
        <h1>Login</h1>
      </div>
    </header>
  )
}

export default Login