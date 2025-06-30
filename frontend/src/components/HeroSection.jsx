import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Delicious</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="/res1.png" alt="Delicious Food" loading="lazy" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Food</h1>
                <h1 className="title dishes_title">Dishes</h1>
                <img src="/threelines.svg" alt="lines" loading="lazy" />
              </div>
              <img className="logo" src="/logo.svg" alt="logo" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="/res2.png" alt="More Dishes" loading="lazy" />
          </div>
          <h1 className="title dishes_title">Dishes</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
