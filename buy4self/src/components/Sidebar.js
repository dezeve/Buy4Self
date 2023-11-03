import {
  faArrowRight,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect } from "react";
import categoriesData from "../dummyData/categories.json";
const Sidebar = (props) => {
  const { active: activeCategoryId } = props;
  /* useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    //for axios get to products endpoint with category filter
  };*/

  return (
    <div>
      <div className="px-sm-2 px-0 mr-0 rounded mt-3 bg-secondary">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 pb-4 text-white ">
          <br />
          <h4>Categories</h4>
          <br />
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            {categoriesData.map((category) => (
              <li key={category.id}>
                <a
                  href={`products?category=${category.id}`}
                  className={
                    category.id == activeCategoryId
                      ? "nav-link px-0 align-middle text-white activeCategory"
                      : "nav-link px-0 align-middle text-white"
                  }
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                  <span className="ms-1 "> {category.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-12 mt-3 btn btn-lg text-white" style={{background: "rgb(34,193,195)"}}>
          <a href="/Offers">
            Special Offers
          </a> 
      </div>
      <div className="col-12 btn btn-danger btn-lg mt-3">
          <a href="/Offers">
            Bargain Sale
          </a>
      </div>
    </div>
  );
};

export default Sidebar;
