import React from "react";

import "../../style/newslatter.css";
const Newslatter = () => {
  return (
    <section className="newslatter">
      <div className="container">
        <div className="newslatter__wrapper">
          
          <div className="newslatter__content">
            <h6 className="subtitle">Get in touch</h6>
            <h2>
              Subscribe to <span className="highlight">hidden</span>online
              courses
            </h2>
          </div>

          <div className="newslatter__form">
            <input type="email" placeholder="Enter your email" />
            <button className="secondary__btn subcribe__btn">Submit</button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Newslatter;
