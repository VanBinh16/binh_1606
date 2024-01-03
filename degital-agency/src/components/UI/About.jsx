import React from "react";

import "../../style/about.css";
import aboutImg from "../../images/about-us.jpg";
const chooseData = [
  {
    icon: "ri-wifi-line",
    title: "First working process",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nostrum quod vitae dolorem iure, molestias a voluptate?",
  },
  {
    icon: "ri-team-line",
    title: "Dedicated team",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nostrum quod vitae dolorem iure, molestias a voluptate?",
  },
  {
    icon: "ri-customer-service-2-line",
    title: "24/7 House support",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nostrum quod vitae dolorem iure, molestias a voluptate?",
  },
];
const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__content">
            <h6 className="subtitle">Why choose us </h6>
            <h2>We Provide Best Digital Services</h2>
            <h2 className="highlight">financial challenge </h2>
            <p className="description about__content-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              voluptas, voluptate, voluptatum voluptatem voluptates voluptatibus
            </p>

            <div className="choose__us-wrapper">
              {chooseData.map((item, index) => (
                <div className="choose__us-item" key={index}>
                  <span className="choose__us-icon">
                    <i className={item.icon}></i>
                  </span>
                  <div>
                    <h4 className="choose__us-title">{item.title}</h4>
                    <p className="description">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about__img">
            <img src={aboutImg} alt="about-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
