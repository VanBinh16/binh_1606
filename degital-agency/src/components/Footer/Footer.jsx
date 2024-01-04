import React from "react";

import "./footer.css";

const quickLinks01 = [
  {
    title: "About",
    path: "#",
  },
  {
    title: "Services",
    path: "#",
  },
  {
    title: "Project",
    path: "#",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <h2>Digency</h2>
            <p className="description">Grow with us</p>
            <p className="small__text description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur, voluptas molestiae. Tenetur neque nesciunt ad,
              explicabo voluptatum velit.
            </p>
          </div>
          <div className="footer__quick-links">
            <h3 className="quick__links-title">Solutions</h3>
            <ul className="quick__links">
              {quickLinks01.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__quick-links">
            <h3 className="quick__links-title">Solutions</h3>
            <ul className="quick__links">
              {quickLinks01.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__quick-links">
            <h3 className="quick__links-title">Solutions</h3>
            <ul className="quick__links">
              {quickLinks01.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="copyright">Huỳnh Văn Bình &copy; 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
