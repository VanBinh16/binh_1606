import React from "react";

import "./header.css";

const nav_links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#services",
    display: "Services",
  },
  {
    path: "#project",
    display: "Project",
  },
  {
    path: "#blog",
    display: "Blog",
  },
];
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2>Degital Agency</h2>
          </div>

          {/* =============navigation========== */}
          <div className="navigation">
            <ul className="menu">
              {nav_links.map((item, index) => (
                <li className="menu__item" key={index}>
                  <a href={item.path} className="menu__link">
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =============light mode ========== */}
          <div className="light__mode">
            <span>
              <i className="ri-sun-line"></i> Light Mode
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
