import React from "react";

import "../../style/team.css";
import team01 from "../../images/team-01.png";
import team02 from "../../images/team-02.png";
import team03 from "../../images/team-03.png";
import team04 from "../../images/team-04.png";

const teamMembers = [
  {
    imgUrl: team01,
    name: "Courtny Hurry",
    position: "Product Develop",
  },
  {
    imgUrl: team02,
    name: "Lindas Walon",
    position: "Front-end Develop",
  },
  {
    imgUrl: team03,
    name: "Hurry Martin",
    position: "Product Manage",
  },
  {
    imgUrl: team04,
    name: "Jhon Cooper",
    position: "CEO & Founder",
  },
];
const Team = () => {
  return (
    <section className="our__team">
      <div className="container">
        <div className="team__content">
          <h6 className="subtitle">Our team</h6>
          <h2>
            Meet with <span className="highlight">our team</span>
          </h2>
        </div>

        <div className="team__wrapper">
          {teamMembers.map((item, index) => (
            <div className="team__item" key={index}>
              <div className="team__img">
                <img src={item.imgUrl} alt="team-img" />
              </div>
              <div className="team__details">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>
                <div className="team__member-social">
                  <span>
                    <i className="ri-linkedin-line"></i>
                  </span>
                  <span>
                    <i className="ri-facebook-circle-line"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
