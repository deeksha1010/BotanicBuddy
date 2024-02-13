// PlantWatering.js

import React, { useState, useEffect } from "react";
import "./PlantWatering.css";

const PlantWatering = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [checkedDays, setCheckedDays] = useState([]);
  const [message, setMessage] = useState("");

  const getWeekDays = (startDate) => {
    const days = [];
    for (let i = 0; i < 6; i++) {
      const currentDay = new Date(startDate);
      currentDay.setDate(startDate.getDate() + i);
      days.push(currentDay);
    }
    return days;
  };

  const weekDays = getWeekDays(startDate);
  const currentDate = new Date();

  const handlePrevWeek = () => {
    setStartDate((prevStartDate) => {
      const newStartDate = new Date(prevStartDate);
      newStartDate.setDate(prevStartDate.getDate() - 7);
      return newStartDate;
    });
  };

  const handleNextWeek = () => {
    setStartDate((prevStartDate) => {
      const newStartDate = new Date(prevStartDate);
      newStartDate.setDate(prevStartDate.getDate() + 7);
      return newStartDate;
    });
  };

  const handleCheckboxChange = (day) => {
    if (checkedDays.includes(day.toDateString())) {
      setCheckedDays((prevCheckedDays) =>
        prevCheckedDays.filter((date) => date !== day.toDateString())
      );

      // Reset the message when a checkbox is unchecked
      setMessage("");
    } else {
      setCheckedDays((prevCheckedDays) => [...prevCheckedDays, day.toDateString()]);
      setMessage("Thank you for watering today!");
    }
  };

  return (
    <div>
      <div className="headingwater">Plant Watering</div>
      <div className="calendar-container">
        <div className="month-container">
          {startDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </div>
        <div className="week-container">
          <div className="buttonwater">
            <button onClick={handlePrevWeek}>&lt; Prev</button>
          </div>
          {weekDays.map((day, index) => (
            <div
              key={index}
              className={`day ${day.toDateString() === currentDate.toDateString() ? 'current-day' : ''}`}
            >
              <div>{day.toDateString().split(" ")[0]}</div>
              <div>{day.getDate()}</div>
              {day <= currentDate && (
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={checkedDays.includes(day.toDateString())}
                    onChange={() => handleCheckboxChange(day)}
                  />
                </div>
              )}
            </div>
          ))}
          <div className="buttonwater">
            <button onClick={() => { handleNextWeek(); }}>{`Next >`}</button>
          </div>
        </div>
        {message && <div className="message">{message}</div>}
      </div>
    </div>
  );
};

export default PlantWatering;
