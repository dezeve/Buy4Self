import { faCartPlus, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProductCard = (props) => {
  const { data: product } = props;
  
  const addToCartHandler = (productId) => {

;
    //We will show dropdown, we can control it via their classname like as "show". When we click add to cart button,
    //it has to change their classname as "show" but when we click add to cart button again, their classnames shouldnt contain "show"
  };
  return (
    <div className="card mt-3">
      <a href={`product/${product.id}`}>
        {" "}
        <img src={product.img} className="card-img-top img-fluid" alt="..." />
      </a>
      <div className="card-body ">
        <h5 className="card-title">
          {" "}
          <a
            href={`product/${product.id}`}
            className="text-decoration-none text-dark"
          >
            {product.name}
          </a>
        </h5>
        <a href="products?category=kategori">
          {" "}
          <span class="badge rounded-pill text-bg-light mb-3">
            {product.category.name}
          </span>
        </a>
        <div className="productPrice mb-3 text-center text-third  fw-bold">
          {" "}
          {product.price} TL
        </div>

        <div
          className="btn btn-success col-12"
          onClick={() => addToCartHandler(product.id)}
        >
          <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
