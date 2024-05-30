import React from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import Layout from "../layout/Layout";
import productsData from "../dummyData/products.json";
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

const Products = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activeCategoryName = searchParams.get("category");

  function getCategoryIcon(category) {
    category = category.replace(/\s/g, '')
    switch (category) {
      case "Electronics":
        return <FontAwesomeIcon width={25} size="2xl" className="me-2" icon={faBolt} />
      case "Clothing":
        return <FontAwesomeIcon width={25} size="2xl" className="me-2" icon={faTshirt} />
      case "SportsEquipment":
        return <FontAwesomeIcon width={25} size="2xl" className="me-2" icon={faBasketball} />
      case "Books":
        return <FontAwesomeIcon width={25} size="2xl" className="me-2" icon={faBook} />
      case "Music":
        return <FontAwesomeIcon width={25} size="2xl" className="me-2" icon={faMusic} />
      case "Furniture":
        return <FontAwesomeIcon width={25} size="2xl" className="me-2" icon={faCouch} />
      case "PetProducts":
        return <FontAwesomeIcon width={25} size="2xl" className="me-2" icon={faCat} />
      case "Games":
        return <FontAwesomeIcon width={25} size="2xl" className="me-2" icon={faGamepad} />
      case "OfficeSupplies":
        return <FontAwesomeIcon width={25} size="2xl" className="me-2" icon={faBriefcase} />
      case "Groceries":
        return <FontAwesomeIcon width={25} size="2xl" className="me-2" icon={faSeedling} />
      default:
        break;
    }
  }

  return (
    <Layout>
      <div className="col-md-4 col-xl-3 col-xs-12">
        <Sidebar active={activeCategoryName} />
      </div>
      <div className="col-md-8 col-xl-9 col-xs-12 mt-3">
        <div className="col-12 text-center">
          <label className="fs-3 w-100 text-start fw-bold">
            {getCategoryIcon(activeCategoryName)}
            {activeCategoryName}
            <br />
            <hr className="mb-0 pb-0" />
          </label>
        </div>
        <div className="row">
          {productsData.map((product) => (
            <div className="col-md-6 col-sm-6 col-lg-4 col-xl-3 mb-3">
              <ProductCard data={product} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
