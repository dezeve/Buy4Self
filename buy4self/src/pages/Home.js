import React from "react";
import Layout from "../layout/Layout";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
const Home = () => {
  return (
    <Layout>
      
        <div className="col-md-4 col-xl-3 col-xs-12 ">
          {" "}
          <Sidebar />
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
            </div>
         
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
            </div>
          </div>
        </div>
 
    </Layout>
  );
};

export default Home;
