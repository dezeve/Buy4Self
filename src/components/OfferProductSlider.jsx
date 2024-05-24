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
    speed: 1200,
    slidesToShow: 5,
    autoplay: true,
    pauseOnHover: true,
    swipeToSlide: true,
    arrows: false,
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
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          infinite: true,
        },
      },
    ],
  };
  return (
    <Slider className="gx-0" {...settings}>
      {products.map((product) => (
        <div className="col-12 px-3">
          <ProductCard data={product} />
        </div>
      ))}
    </Slider>
  );
};

export default OfferProductSlider;
