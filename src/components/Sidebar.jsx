import {
  faBarsStaggered,
  faBasketball,
  faBolt,
  faBook,
  faBriefcase,
  faCat,
  faCouch,
  faGamepad,
  faMusic,
  faSeedling,
  faTshirt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from "axios";
import React, { useEffect } from "react";
import categoriesData from "../dummyData/categories.json";

const Sidebar = (props) => {
  const { active: activeCategoryName } = props;

  /* useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    //for axios get to products endpoint with category filter
  };*/

  function getCategoryIcon(category) {
    category = category.replace(/\s/g, '')
    switch (category) {
      case "Electronics":
        return <FontAwesomeIcon width={20} size="lg" className="me-1" icon={faBolt} />
      case "Clothing":
        return <FontAwesomeIcon width={20} size="lg" className="me-1" icon={faTshirt} />
      case "SportsEquipment":
        return <FontAwesomeIcon width={20} size="lg" className="me-1" icon={faBasketball} />
      case "Books":
        return <FontAwesomeIcon width={20} size="lg" className="me-1" icon={faBook} />
      case "Music":
        return <FontAwesomeIcon width={20} size="lg" className="me-1" icon={faMusic} />
      case "Furniture":
        return <FontAwesomeIcon width={20} size="lg" className="me-1" icon={faCouch} />
      case "PetProducts":
        return <FontAwesomeIcon width={20} size="lg" className="me-1" icon={faCat} />
      case "Games":
        return <FontAwesomeIcon width={20} size="lg" className="me-1" icon={faGamepad} />
      case "OfficeSupplies":
        return <FontAwesomeIcon width={20} size="lg" className="me-1" icon={faBriefcase} />
      case "Groceries":
        return <FontAwesomeIcon width={20} size="lg" className="me-1" icon={faSeedling} />
      default:
        break;
    }
  }

  return (
    <div>
      <div className="px-2 mr-0 rounded mt-3 bg-secondary">
        <div className="d-flex flex-column align-items-start px-3 pt-2 pb-4 text-white ">
          <h4 className="mt-4 mb-3 fw-bold">
            <FontAwesomeIcon icon={faBarsStaggered} className="me-2" />
            Categories
          </h4>
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-2 align-items-start"
            id="menu"
          >
            {categoriesData.map((category) => (
              <li key={category.id} className="mt-2">
                <a
                  href={`products?category=${category.name}`}
                  className={
                    category.name == activeCategoryName
                      ? "nav-link ps-2 pe-0 align-middle text-white active-category"
                      : "nav-link ps-2 pe-0 align-middle text-white not-active-category"
                  }
                >
                  {getCategoryIcon(category.name)}
                  <span className="ms-1 fw-bold h6">
                    {category.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <a href="/Offers">
        <button className="col-12 mt-3 btn btn-lg text-light fw-bold"
          style={{ background: "#157D7E" }}>
          Special Offers
        </button>
      </a>
      <a href="/Offers">
        <button className="col-12 btn fw-bold text-light btn-lg mt-3"
          style={{ background: "#B30000" }}>
          Bargain Sale
        </button>
      </a>
    </div>
  );
};

export default Sidebar;
