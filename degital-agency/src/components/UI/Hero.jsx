import React from "react";

import heroDarkImg from "../../images/hero-img.png";

import "../../style/hero.css";
const Hero = () => {
  return (
    <section className="hero__section">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div>
              <h2>We're Creating Perfect</h2>
              <h2>Degital Products To</h2>
              <h2 className="highlight">Promote Your Brand</h2>
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              expedita vel totam. Culpa, facilis iusto.
            </p>
            <div className="hero__btns">
              <button className="primary__btn">Get Start Now</button>
              <button className="secondary__btn">Discover More</button>
            </div>
          </div>

          <div className="hero__img">
            <img src={heroDarkImg} alt="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
