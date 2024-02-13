import React from "react";
import { Link, Navigate } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import logo from './logo.png';
import plant from './plant.png';
import "./About.css";

function About() {
  const [goToContact, setGoToContact] = React.useState(false);

  if (goToContact) {
    return <Navigate to="/Contact" />;
  }

  const imageVariants = {
    initial: { opacity: 0, y: +150 },
    animate: { opacity: 1, y: 0 },
  };

  const imageTransition = {
    type: "spring",
    stiffness: 120,
    damping: 14,
  };

  return (
    <div className="about-container back">
      <div className="logo-container2">
        <Link to="/About">
          <img src={logo} alt="Botanic Buddy Logo" className="logo" />
        </Link>
      </div>
      <div className="floathead">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Welcome to Botanic Buddy, your ultimate Plant Care Hub! Explore our extensive plant database, access expert care guides, and connect with a vibrant community of enthusiasts. From troubleshooting tips to curated gardening essentials, we're here to support your journey in creating a thriving green haven. Whether you're a novice or seasoned gardener, Botanic Buddy is your go-to destination for all things green. Join our community to connect, learn, and grow together.")
              .start();
          }}
          options={{
            delay: 40,
            cursor: '|',
            deleteSpeed: 100,
            autoStart: true,
            loop: false,
          }}
        />
      </div>
      <div className="plant-image-container">
        <Link to="/PlantInfo">
          <motion.div
            initial="initial"
            animate="animate"
            variants={imageVariants}
            transition={imageTransition}
          >
            <img src={plant} alt="Plant" className="plant-image" />
          </motion.div>
        </Link>
      </div>
      <div className="button-container">
        <Link to="/PlantInfo">
          <button className="plant-info-btn">
            <span role="img" aria-label="leaf" className="emoji">🍃</span> Plant Info
          </button>
        </Link>

        <Link to="/PlantWatering">
          <button className="plant-info-btn">
            <span role="img" aria-label="water" className="emoji">💧</span> Plant Watering
          </button>
        </Link>

        <Link to="/PlantAdoption">
          <button className="plant-info-btn">
            <span role="img" aria-label="tree" className="emoji">🌳</span> Plant Adoption
          </button>
        </Link>
        <br />
        <button className="feedback-btn" onClick={() => setGoToContact(true)}>
          <span role="img" aria-label="feedback" className="emoji">💬</span> Feedback
        </button>
      </div>
    </div>
  );
}

export default About;
