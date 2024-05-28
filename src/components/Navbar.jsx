import {
  faBasketShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useMemo, useRef, useState } from "react";
import CartDropdown from "./CartDropdown";

const Navbar = (props) => {

  const inputRef = useRef(null)
  const [search, setSearch] = useState("Search")

  var searchInput = ""

  function takeSearchInput() {
    searchInput = inputRef.current.value.toLowerCase()
    searchInput = searchInput.trim()
    setSearch(searchInput)
  }

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
            <div className="d-flex mx-auto col-lg-6 col-xs-9 col-sm-9 mx-auto">
              <input
                id="searchBox"
                className="form-control me-2"
                type="search"
                placeholder={search}
                aria-label="Search"
                ref={inputRef}
              />
              <button onClick={() => { takeSearchInput(); props.changeWord(searchInput) }}
                className="btn btn-outline-light col-4 fw-bold" type="submit">
                <FontAwesomeIcon className="me-2" icon={faMagnifyingGlass} />
                Search
              </button>
            </div>
            <ul className="navbar-nav ml-auto">
              <li className="d-none d-lg-block">
                <div className="nav-item dropdown ">
                  <CartDropdown />
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/sign-in">
                  Sign In
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/sign-up">
                  Sign Up
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
