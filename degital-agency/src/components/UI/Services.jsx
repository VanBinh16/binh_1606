import React from "react";
import "../../style/services.css";

const servicesData = [
  {
    icon: "ri-apps-line",
    title: "App Developments",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Distinctio, dicta facere? Necessitatibus deserunt obcaecati quis quam dolore tenetur commodi debitis illo doloribus dolorem soluta ut id, facilis aperiam eligendi facere, voluptates, nesciunt atque quia magnam porro.",
  },
  {
    icon: "ri-code-s-slash-line",
    title: "Web Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Distinctio, dicta facere? Necessitatibus deserunt obcaecati quis quam dolore tenetur commodi debitis illo doloribus dolorem soluta ut id, facilis aperiam eligendi facere, voluptates, nesciunt atque quia magnam porro.",
  },
  {
    icon: "ri-landscape-line",
    title: "Landscaping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Distinctio, dicta facere? Necessitatibus deserunt obcaecati quis quam dolore tenetur commodi debitis illo doloribus dolorem soluta ut id, facilis aperiam eligendi facere, voluptates, nesciunt atque quia magnam porro.",
  },
  {
    icon: "ri-rocket-line",
    title: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Distinctio, dicta facere? Necessitatibus deserunt obcaecati quis quam dolore tenetur commodi debitis illo doloribus dolorem soluta ut id, facilis aperiam eligendi facere, voluptates, nesciunt atque quia magnam porro.",
  },
];
const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="services__top-content">
          <h6 className="subtitle">Our services</h6>
          <h2>Save time managing your business with</h2>
          <h2 className="highlight">our best services</h2>
        </div>

        <div className="services__item-wrapper">
          {" "}
          {servicesData.map((item, index) => (
            <div className="services__item" key={index} >
              <span className="services__icon">
                <i className={item.icon}></i>
              </span>
              <h3 className="services__title">{item.title}</h3>
              <p className="description">{item.desc} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
