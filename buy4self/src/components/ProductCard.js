import { faCartPlus, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


const ProductCard = () => {

  const addToCartHandler = () => {
    
    
   //We will show dropdown, we can control it via their classname like as "show". When we click add to cart button, 
   //it has to change their classname as "show" but when we click add to cart button again, their classnames shouldnt contain "show"


  }
  return (
    <div className="card mt-3">
      <a href="product/1">
        {" "}
        <img
          src="https://placehold.co/600x400/EEE/31343C"
          className="card-img-top"
          alt="..."
        />
      </a>
      <div className="card-body">
        <h5 className="card-title">
          {" "}
          <a href="product/1" className="text-decoration-none text-dark">
            Product{" "}
          </a>
        </h5>
        <a href="products?category=kategori">
          {" "}
          <span class="badge rounded-pill text-bg-light mb-3">Kategori</span>
        </a>

        <div className="btn btn-success col-12" onClick={addToCartHandler}>
          <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
