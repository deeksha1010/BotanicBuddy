import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from './logo.png';

function Home() {
  return (
    <div className="container">
      <div className="right-section">
        <div className="logo-container">
          <Link to="/About">
            <img src={logo} alt="Botanic Buddy Logo" className="logo" />
          </Link>
        </div>
        <div className="home-page">
          <div className="heading">Hi there!</div>
          <div className="heading1">Welcome to Botanic Buddy</div>
          <form className="login-form">
            <div className="input-field">
              <label htmlFor="email">Email </label>
              <input type="email" id="email" name="email" aria-label="Email" />
            </div>
            <div className="input-field">
              <label htmlFor="username">Username </label>
              <input type="text" id="username" name="username" aria-label="Username" />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password </label>
              <input type="password" id="password" name="password" aria-label="Password" />
            </div>
            <div className="input-field">
              <label htmlFor="confirmPassword">Confirm Password </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                aria-label="Confirm Password"
              />
            </div>
            <Link to="/about" className="link-to-about login-button">
              Create Account
            </Link>
          </form>
          <div className="create-account-link">
            <p>
              Already have an account? <Link to="/Loginusr">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="left-section">
        <div className="main">
          {/* You can add content or styles for the right side if needed */}
        </div>
      </div>
    </div>
  );
}

export default Home;
