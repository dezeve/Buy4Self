import React, { useState } from "react";
import Layout from "../layout/Layout";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import productsData from "../dummyData/products.json";
import Navbar from "../components/Navbar";

const Home = () => {

  const [word, setWord] = useState("")

  if (word !== "") {
    var filteredData = productsData.filter(product => product.name.toLowerCase().includes(word))
  } else {
    filteredData = productsData
  }

  return (
    <Layout>
      <Navbar changeWord={word => setWord(word)} />
      <div className="col-md-4 col-xl-3 col-xs-12 ">
        <Sidebar />
      </div>
      <div className="col-md-8 col-xl-9 col-xs-12 ">
        <div className="row">
          {filteredData.map((product) => (
            <div
              key={product.id}
              className="col-md-6 col-sm-6 col-lg-4 col-xl-3 mb-3"
            >
              <ProductCard data={product} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
