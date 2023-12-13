import {
  faBasketShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useMemo } from "react";
import CartDropdown from "./CartDropdown";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary text-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/">
            Buy4Self
          </a>
          <div className="d-block d-lg-none">
            <CartDropdown />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white" href="/offers">
                  Offers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex mx-auto col-lg-6 col-xs-9 col-sm-9 mx-auto">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light col-4" type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
              </button>
            </form>
            <ul className="navbar-nav ml-auto">
              <li className="d-none d-lg-block">
                <div className="nav-item dropdown ">
                  <CartDropdown />{" "}
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/register">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
