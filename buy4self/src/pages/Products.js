import React from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import Layout from "../layout/Layout";

const Products = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
    const activeCategoryId = searchParams.get("category");
    
  return (
    <Layout>
      <div className="col-md-4 col-xl-3 col-xs-12 ">
        {" "}
        <Sidebar active={activeCategoryId} />
      </div>
      <div className="col-md-8 col-xl-9 col-xs-12 ">
        <div className="row">
          {" "}
          <div className="col-md-3">
            {" "}
            <ProductCard />
          </div>
          <div className="col-md-3">
            {" "}
            <ProductCard />
          </div>
          <div className="col-md-3">
            {" "}
            <ProductCard />
          </div>
          <div className="col-md-3">
            {" "}
            <ProductCard />
          </div>{" "}
          <div className="col-md-3">
            {" "}
            <ProductCard />
          </div>
          <div className="col-md-3">
            {" "}
            <ProductCard />
          </div>
          <div className="col-md-3">
            {" "}
            <ProductCard />
          </div>
          <div className="col-md-3">
            {" "}
            <ProductCard />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
