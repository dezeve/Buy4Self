import React from "react";
import Layout from "../layout/Layout";
import products from "../dummyData/products.json";
import OfferProductSlider from "../components/OfferProductSlider";

const Offers = () => {
  return (
    <Layout>
      <div className="p-5 bg-primary bg-gradient text-white rounded">
        <div className="row">
          <div className="col-sm">
            <h1 className="mb-4 fw-bold">Flash Sales</h1>
            Integer iaculis sapien quis velit ultricies blandit. Nullam
            pellentesque porttitor turpis eget sodales. Vivamus eros ligula,
            convallis at aliquam et, finibus at mi. Phasellus accumsan semper
            quam eget convallis. Morbi non sem tempus, mollis nibh a, molestie
            nunc. Nullam ultricies magna ligula, ac tempor magna commodo id.
            Morbi eget facilisis nulla. Nullam aliquam dui eget neque cursus,
            volutpat blandit orci pulvinar. Duis eget ullamcorper mauris, vitae
            luctus massa. Mauris facilisis mi nec augue vulputate, in efficitur
            purus hendrerit. Mauris auctor lorem vitae leo interdum, vel
            tincidunt est ultricies. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. In hac
            habitasse platea dictumst. Suspendisse potenti.
          </div>
          <div className="col-sm">
            <img
              className="rounded img-fluid mt-4 mt-sm-0"
              src="https://images.unsplash.com/photo-1583573636246-18cb2246697f?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1938"
              alt="sale"
              width="700"
              height="300"
            />
          </div>
        </div>
      </div>

      <div className="container mb-5 mt-3">
        <div className="row">
          <OfferProductSlider data={products} />
        </div>
      </div>
    </Layout>
  );
};

export default Offers;
