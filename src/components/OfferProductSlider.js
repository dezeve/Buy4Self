import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const OfferProductSlider = (props) => {

  const { data: products } = props;
  var settings = {
    dots: true,
    speed: 800,
    slidesToShow: 4,
    autoplay: true,
    pauseOnHover: true,
    swipeToSlide: true,
    arrows:true
  };
  return (
    <Slider {...settings}>
      {products.map((product) => (
        <div className="col-3 px-3">
          {" "}
          <ProductCard data={product} />
        </div>
      ))}
    </Slider>
  );
};

export default OfferProductSlider;
