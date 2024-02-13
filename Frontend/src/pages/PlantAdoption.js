import React, { useState } from 'react';
import './PlantAdoption.css';

const PlantAdoption = () => {
  const [startIndex, setStartIndex] = useState(0);

  const plantData = [
    { id: 1, imageUrl: 'https://dummyimage.com/300x200/ccc/000&text=Plant+1', buttonText: 'Adopt' },
    { id: 2, imageUrl: 'https://dummyimage.com/300x200/ccc/000&text=Plant+2', buttonText: 'Adopt' },
    { id: 3, imageUrl: 'https://dummyimage.com/300x200/ccc/000&text=Plant+3', buttonText: 'Adopt' },
    { id: 4, imageUrl: 'https://dummyimage.com/300x200/ccc/000&text=Plant+4', buttonText: 'Adopt' },
    { id: 5, imageUrl: 'https://dummyimage.com/300x200/ccc/000&text=Plant+5', buttonText: 'Adopt' },
    { id: 6, imageUrl: 'https://dummyimage.com/300x200/ccc/000&text=Plant+6', buttonText: 'Adopt' },
    { id: 7, imageUrl: 'https://dummyimage.com/300x200/ccc/000&text=Plant+7', buttonText: 'Adopt' },
    { id: 8, imageUrl: 'https://dummyimage.com/300x200/ccc/000&text=Plant+8', buttonText: 'Adopt' },
    { id: 9, imageUrl: 'https://dummyimage.com/300x200/ccc/000&text=Plant+9', buttonText: 'Adopt' },
    { id: 10, imageUrl: 'https://dummyimage.com/300x200/ccc/000&text=Plant+10', buttonText: 'Adopt' },
  ];

  const displayCards = plantData.slice(startIndex, startIndex + 3);

  const moveNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 3, plantData.length - 3));
  };

  const movePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  return (
    <div id='body1'>
      <h1>Plant Adoption</h1>
      <div className="carousel-container">
        <div className="carousel">
          {displayCards.map((plant) => (
            <div key={plant.id} className="card">
              <img src={plant.imageUrl} alt={`Plant ${plant.id}`} />
              <div className="plant-info">
                <p className="plant-name">Plant {plant.id}</p>
                <p className="plant-description">Two-line description here</p>
                <button className="card-button">{plant.buttonText}</button>
              </div>
            </div>
          ))}
        </div>
        <button className="prev-button" onClick={movePrev} disabled={startIndex === 0}>
          ❮
        </button>
        <button className="next-button" onClick={moveNext} disabled={startIndex >= plantData.length - 3}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default PlantAdoption;
 