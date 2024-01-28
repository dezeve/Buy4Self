import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const OfferProductSlider = (props) => {
  const { data: products } = props;
  var settings = {
    dots: true,
    speed: 800,
    slidesToShow: 4,
    autoplay: true,
    pauseOnHover: true,
    swipeToSlide: true,
    arrows: true,
    nextArrow: (
      <div >
        <FontAwesomeIcon
          icon={faArrowRight}
          style={{
            color: "black",
            fontSize: "30px",
          }}
        />
      </div>
    ),

    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {products.map((product) => (
        <div className="col-12 px-3">
          {" "}
          <ProductCard data={product} />
        </div>
      ))}
    </Slider>
  );
};

export default OfferProductSlider;
