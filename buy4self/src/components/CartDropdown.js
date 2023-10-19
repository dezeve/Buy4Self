import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useMemo } from "react";
import { useCart } from "../context/CartDropdownContext";

const CartDropdown = () => {
  const { isCartOpen, toggleCart } = useCart();
  return (
    <div>
      <a
        className={`nav-link text-white dropdown-toggle ${
          isCartOpen ? "show" : ""
        } `}
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="true"
        onClick={toggleCart}
      >
        <FontAwesomeIcon icon={faBasketShopping} /> Cart
      </a>
      <div
        className={`dropdown-menu dropdown-menu-end mx-auto cartDropdownInNavbar p-2
                     ${isCartOpen ? "show" : ""}
                      `}
        data-bs-popper="static"
      >
        <center>
          <label className="fw-bold">Cart Details</label>
        </center>
        <a className="dropdown-item">Product 1 100 TL</a>
        <a className="dropdown-item">Product 2 100 TL</a>
        <hr className="dropdown-divider" />

        <div className="btn btn-success col-12 fit-contain">
          <a href="/Cart" className="text-white text-decoration-none">
            Go To Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
