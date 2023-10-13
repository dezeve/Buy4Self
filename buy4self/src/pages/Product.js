import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Layout from "../layout/Layout";

const Product = () => {
  return (
    <Layout>
      <div className="col-5">
        <img
          src="https://hipokampus.com.tr/images/hizmetler/tr/fethiye-hipokampus-essiz-coworking-ofis-is-birligi-verimlilik.webp"
          className="card-img-top rounded shadow-lg"
          alt="..."
        />
      </div>
      <div className="col-7">
        <div className="card">
          <div className="card-body">
            {" "}
            <h3 className="card-title"> Product </h3>
            {
              //FOR reviews icons etc
            }
            <div className="price text-third fw-bold">128 TL</div>
            <p className="card-text mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              venenatis cursus quam eu blandit. Aliquam porttitor rhoncus enim
              quis ullamcorper. Maecenas quis pulvinar lacus, quis ornare dui.
              Duis non orci varius, dictum ante et, tempor eros. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Nullam at sapien ac lectus facilisis venenatis id
              nec est. Mauris quis semper nunc. Sed volutpat interdum ipsum id
              facilisis. Aliquam ac efficitur tellus. Sed non ornare justo.
              <br />
              <br />
              Aenean et euismod tellus, vitae accumsan lorem. Cras et risus
              sodales tellus fermentum imperdiet vel a felis. Donec mollis
              mauris at leo volutpat, ac ultrices sapien malesuada. Praesent
              rutrum leo ac erat dignissim, ac molestie erat molestie.
            </p>
            <center>
              {" "}
              <div className="btn btn-success col-6 mt-3">
                <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
              </div>
            </center>
          </div>
        </div>
      </div>

      <div className="col-12 mt-5">
        <div className="card p-3">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Mustafa KAÇAR</div>
              <p className="card-text"> Review test</p>
            </div>
          </div>

          <hr />

          <div className="card">
            <div className="card-body">
              <div className="card-title">Mustafa KAÇAR</div>
              <p className="card-text"> Review test</p>
            </div>
          </div>
        </div>
        {/* 
FOR REVIEWS
*/}
      </div>
    </Layout>
  );
};

export default Product;
