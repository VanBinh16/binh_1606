import React from "react";

import "../../style/blog.css";

import videoImg from "../../images/video.png";
import articleImg from "../../images/article.png";
import caseStudy from "../../images/case-study.png";

const blogData = [
  {
    imgUrl: videoImg,
    title: "Videos",
    desc: "To know about our videos, click here...",
    linkUrl: "#",
  },
  {
    imgUrl: articleImg,
    title: "Videos",
    desc: "To know about our videos, click here...",
    linkUrl: "#",
  },
  {
    imgUrl: caseStudy,
    title: "Videos",
    desc: "To know about our videos, click here...",
    linkUrl: "#",
  },
];
const Blog = () => {
  return (
    <section>
      <div className="container">
        <div className="blog__top-content">
          <h6 className="subtitle">Our blog</h6>
          <h2>
            Let's have a look from our
            <span className="highlight"> recent blog</span>
          </h2>
        </div>
        <div className="blog__wrapper">
          {blogData.map((item, index) => (
            <div className="blog__item" key={index}>
              <h3>{item.title}</h3>
              <div className="blog__img">
                <img src={item.imgUrl} alt="blog-img" />
                <p className="description blog__desc">{item.desc}</p>
                <div>
                  <a href="#" className="learn__more">
                    <i class="ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
