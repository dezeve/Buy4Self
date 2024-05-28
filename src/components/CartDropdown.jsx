import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useCart } from "../context/CartDropdownContext";
import QuantitySelector from "./QuantitySelector";

const CartDropdown = () => {
  const { isCartOpen, toggleCart } = useCart();
  return (
    <div>
      <a
        className={`nav-link text-white dropdown-toggle ${isCartOpen ? "show" : ""
          } `}
        role="button"
        aria-expanded="true"
        onClick={toggleCart}
      >
        <FontAwesomeIcon icon={faBasketShopping} /> Cart
      </a>
      <div
        className={`dropdown-menu dropdown-menu-center mx-auto cartDropdownInNavbar p-2
                     ${isCartOpen ? "show" : ""}
                      `}
        data-bs-popper="static"
      >
        <div className="d-flex justify-content-center">
          <label className="fw-bold h5 mt-2 mb-3">Cart Details</label>
        </div>
        <div className="row">
          <a className="dropdown-item text-start col">Product 1
            <span className="ms-2 fw-bold" style={{color: "#e84118"}}>145 $</span>
          </a>
          <div className="col text-end">
            <QuantitySelector />
          </div>
        </div>
        <div className="row">
          <a className="dropdown-item text-start col">Product 2
            <span className="ms-2 fw-bold" style={{color: "#e84118"}}>200 $</span>
          </a>
          <div className="col text-end">
            <QuantitySelector />
          </div>
        </div>
        <hr className="dropdown-divider" />

        <div>
          <a
            href="/Cart"
            className="text-white fw-bold text-decoration-none btn btn-success col-12 fit-contain"
          >
            Go To Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
