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
          <div className="heading1">Login to your account</div>
          <form className="login-form" action="http://localhost:3001/Loginusr" method="POST">
            <div className="input-field">
              <label htmlFor="username">Username </label>
              <input type="text" id="username" name="username" aria-label="Username" />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password </label>
              <input type="password" id="password" name="password" aria-label="Password" />
            </div>
            <Link to="/about" className="link-to-about login-button">
              Login
            </Link>
          </form>
          <div className="create-account-link">
            <p>
              Do not have an account? <Link to="/">Create account</Link>
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
