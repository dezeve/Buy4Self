import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useMemo } from "react";
import { useCart } from "../context/CartDropdownContext";

const CartDropdown = () => {
  const { isCartOpen, toggleCart } = useCart();
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link text-white dropdown-toggle"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="true"
        onClick={toggleCart}
      >
        <FontAwesomeIcon icon={faBasketShopping} /> Cart
      </a>
      <ul
        className={`dropdown-menu dropdown-menu-start mx-auto
             ${isCartOpen ? "show" : ""} `}
      >
        <li className="dropdown-item">Product 1 100 TL</li>
        <li className="dropdown-item">Product 2 100 TL</li>
        <hr className="dropdown-divider" />
        <li className="p-2">
          <div className="btn btn-success col-12">Go To Cart</div>
        </li>
      </ul>
    </li>
  );
};

export default CartDropdown;
