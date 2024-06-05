import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useCart } from "../context/CartDropdownContext";
import StarRating from "./StarRating";

const ProductCard = (props) => {

  const { data: product } = props;
  const { putCart } = useCart();

  const addToCartHandler = () => {
    putCart();
  };

  function generateRandomBadges() {
    let randomNumber = Math.floor(Math.random() * 100) + 1
    switch (true) {
      case (randomNumber > 70):
        return (
          <span className="badge rounded-pill mb-2 fw-bold ms-1"
            style={{ backgroundColor: "#E6FFE6", color: "green", border: "1px solid green" }}>
            Discount
          </span>
        )
      case (randomNumber > 50):
        return (
          <span className="badge rounded-pill mb-2 fw-bold ms-1"
            style={{ backgroundColor: "#FFE6E6", color: "#FF3333", border: "1px solid #FF3333" }}>
            25% Off
          </span>
        )
      case (randomNumber > 30):
        return (
          <span className="badge rounded-pill mb-2 fw-bold ms-1"
            style={{ backgroundColor: "#E6EBFF", color: "#0040FF", border: "1px solid #0040FF" }}>
            Save 50%
          </span>
        )
      default:
        break
    }
  }

  return (
    <div className="card h-100 mt-3">
      <a href={`product/${product.id}`} target="_blank" rel="noopener noreferrer">
        <img src={product.img} className="card-img-top img-fluid" alt="Product Card Image" />
      </a>
      <div className="card-body">
        <h5 className="card-title">
          <a
            href={`product/${product.id}`}
            className="text-decoration-none text-dark"
          >
            {product.name}
          </a>
        </h5>
        <div className="mb-2">
          <StarRating />
        </div>
        <a href={"products?category=" + product.category.name}>
          <span className="badge rounded-pill border border-dark text-bg-light mb-2">
            {product.category.name}
          </span>
        </a>
        {generateRandomBadges()}
        <div className="productPrice text-center text-third fs-5 fw-bold">
          {product.price} $
        </div>
      </div>
      <div className="position-relative px-3" style={{ bottom: "20px" }}>
        <div
          className="btn btn-success col-12 fw-bold"
          onClick={() => addToCartHandler(product.id)}
        >
          <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
