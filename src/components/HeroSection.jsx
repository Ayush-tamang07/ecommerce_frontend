import React from "react";
import mac from "../assets/mac tv.png";
import "../css/HeroSection.css";

function HeroSection() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <span className="hero-title">
            <span className="text-get-the">Get the</span>
            <br />
            <span className="text-best-monitor"> Best Monitor</span>
          </span>
          <input
            type="text"
            placeholder="Search your product"
            className="hero-search-input"
          />
        </div>
        <div className="hero-image-container">
          <img src={mac} alt="mac" width={700} className="hero-image" />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
