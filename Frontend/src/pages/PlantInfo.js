import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from './logo.png';
import "./PlantInfo.css"; // Import the CSS file

const PlantInfo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCardIndex, setExpandedCardIndex] = useState(null); // State to track expanded card index
  const plantData = [
    { name: "Rose", description: "Beautiful red flower", image: "https://dummyimage.com/200x150/ff9999/000000" },
    { name: "Sunflower", description: "Bright and yellow", image: "https://dummyimage.com/200x150/ffcc00/000000" },
    { name: "lilly", description: "Beautiful red flower", image: "https://dummyimage.com/200x150/ff9999/000000" },
    { name: "tulip", description: "Bright and yellow", image: "https://dummyimage.com/200x150/ffcc00/000000" },
    { name: "Rose", description: "Beautiful red flower", image: "https://dummyimage.com/200x150/ff9999/000000" },
    { name: "Sunflower", description: "Bright and yellow", image: "https://dummyimage.com/200x150/ffcc00/000000" },
    { name: "Rose", description: "Beautiful red flower", image: "https://dummyimage.com/200x150/ff9999/000000" },
    { name: "Sunflower", description: "Bright and yellow", image: "https://dummyimage.com/200x150/ffcc00/000000" },
    { name: "Rose", description: "Beautiful red flower", image: "https://dummyimage.com/200x150/ff9999/000000" },
    // Add more plant data as needed
  ];

  useEffect(() => {
    // Trigger animation when component mounts
    document.querySelector('.hangplant').classList.add('animate-slide-from-right');
    document.querySelector('.standplant').classList.add('animate-slide-from-left');

    // Clean up the animation classes after the animation completes
    const cleanup = () => {
      document.querySelector('.hangplant').classList.remove('animate-slide-from-right');
      document.querySelector('.standplant').classList.remove('animate-slide-from-left');
    };

    // Set a timeout to clean up after the animation duration (in milliseconds)
    const animationDuration = 1000; // Adjust the duration as needed
    const timeoutId = setTimeout(cleanup, animationDuration);

    // Clear the timeout on component unmount to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  // Function to handle changes in the search input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setExpandedCardIndex(null); // Reset expanded card index when searching
  };

  // Filter plant data based on the search term
  const filteredPlants = plantData.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle card expansion when clicked
  const handleCardClick = (index) => {
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  return (
    <div className="bod">
      <div className="logo-container2">
        <Link to="/About">
          <img src={logo} alt="Botanic Buddy Logo" className="logo" />
        </Link>
      </div>
      <div className="hangplant"></div>
      <div className="standplant"></div>
      <div className="plant-info-container">
        <div className="plantinfohead">
          <h2>Lets know about our plants!</h2>
        </div>
        {/* Search bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for a plant..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <span className="search-icon" role="img" aria-label="search">
            🔍
          </span>
        </div>

        {/* Display filtered plant information as cards */}
        <div className="plant-cards-container">
          {filteredPlants.map((plant, index) => (
            <div
              key={index}
              className={`plant-card ${expandedCardIndex === index ? 'expanded' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>{expandedCardIndex === index ? plant.description : ''}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantInfo;
