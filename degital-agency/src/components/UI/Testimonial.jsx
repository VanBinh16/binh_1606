import React from "react";

import "../../style/testimonial.css";
import Silder from "react-slick";
import avao1 from "../../images/ava-1.jpg";
import avao2 from "../../images/ava-2.jpg";
import avao3 from "../../images/ava-3.jpg";
const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <section>
      <div className="container">
        <div className="slider__top-content">
          <h6 className="subtitle">Testimonial</h6>
          <h2>
            Trusteb by more than{""}
            <span className="highlight"> 5,000 customers</span>
          </h2>
        </div>
        <div className="slider__wrapper">
          <Silder {...settings}>
            <div className="slider__item">
              <p className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                esse incidunt exercitationem temporibus consequatur corrupti
                recusandae! Provident ipsam perspiciatis repellat laboriosam
                deserunt commodi, accusamus consequuntur sint sed eaque,
                suscipit eligendi porro debitis optio? Rerum distinctio eaque
                laborum eveniet placeat dignissimos sapiente repudiandae sit,
                ipsum doloribus rem tempora impedit totam perferendis!
              </p>
              <div className="customer__details">
                <div className="customer__img">
                  <img src={avao1} alt="customer-img" />
                </div>
                <div>
                  <h5 className="customer__name">John Doe</h5>
                  <p className="description">CEO, website</p>
                </div>
              </div>
            </div>

            <div className="slider__item">
              <p className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                esse incidunt exercitationem temporibus consequatur corrupti
                recusandae! Provident ipsam perspiciatis repellat laboriosam
                deserunt commodi, accusamus consequuntur sint sed eaque,
                suscipit eligendi porro debitis optio? Rerum distinctio eaque
                laborum eveniet placeat dignissimos sapiente repudiandae sit,
                ipsum doloribus rem tempora impedit totam perferendis!
              </p>
              <div className="customer__details">
                <div className="customer__img">
                  <img src={avao2} alt="customer-img" />
                </div>
                <div>
                  <h5 className="customer__name">John Doe</h5>
                  <p className="description">CEO, website</p>
                </div>
              </div>
            </div>

            <div className="slider__item">
              <p className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                esse incidunt exercitationem temporibus consequatur corrupti
                recusandae! Provident ipsam perspiciatis repellat laboriosam
                deserunt commodi, accusamus consequuntur sint sed eaque,
                suscipit eligendi porro debitis optio? Rerum distinctio eaque
                laborum eveniet placeat dignissimos sapiente repudiandae sit,
                ipsum doloribus rem tempora impedit totam perferendis!
              </p>
              <div className="customer__details">
                <div className="customer__img">
                  <img src={avao3} alt="customer-img" />
                </div>
                <div>
                  <h5 className="customer__name">John Doe</h5>
                  <p className="description">CEO, website</p>
                </div>
              </div>
            </div>
          </Silder>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
