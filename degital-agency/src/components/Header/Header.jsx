import React, { useRef, useEffect } from "react";

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
const Header = ({ theme, toggleTheme }) => {
  const navRef = useRef(null);
  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      navRef.current.classList.add("header__shrink");
    } else {
      navRef.current.classList.remove("header__shrink");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => window.removeEventListener("scroll", headerFunc);
  });
  return (
    <header className="header" ref={navRef}>
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2>Degital</h2>
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
            <span onClick={toggleTheme}>
              {theme === "light-theme" ? (
                <span>
                  <i className="ri-moon-line"></i>Light
                </span>
              ) : (
                <span>
                  <i className="ri-sun-line"></i>Drak
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
