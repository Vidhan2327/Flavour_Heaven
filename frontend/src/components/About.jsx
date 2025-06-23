import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <p>Welcome to Flavor Heaven</p>
          </div>
          <div className="heading">A Story of Freshness</div>
          <div className="mid">
            At Flavor Heaven, we're all about bringing joy through fresh ingredients,
            authentic flavors, and memorable meals. From farm to table, every bite
            is crafted to keep you coming back.
          </div>
          <a href="#menu">
            Explore Special Dishes <span>→</span>
          </a>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
