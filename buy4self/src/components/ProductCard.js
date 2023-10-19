import { faCartPlus, faShoppingCart, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useCart } from "../context/CartDropdownContext";

const ProductCard = (props) => {
  const { data: product } = props;
  const { toggleCart,showCart } = useCart();

  const addToCartHandler = (productId) => {
    toggleCart();
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

        <div class="form-outline d-flex mb-2">
          <button type="button" class="btn btn-danger"><FontAwesomeIcon icon={faMinus} /></button>
          &nbsp;
          <input type="number" class="form-control" disabled/>
          &nbsp;
          <button type="button" class="btn btn-primary"><FontAwesomeIcon icon={faPlus} /></button>
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
