import {
  faMinus,
  faPlus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useCart } from "../context/CartDropdownContext";
import Layout from "../layout/Layout";
import StarRating from "../components/StarRating";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const { toggleCart } = useCart();

  const addToCartHandler = (productId) => {
    toggleCart();
  };

  const increaseQuantity = () => {
    quantity < 5 && setQuantity(quantity + 1)
  }
  const decreaseQuantity = () => {
    quantity > 1 && setQuantity(quantity - 1)
  }
  return (
    <Layout>
      <div className="col-sm-5 mt-4">
        <img
          src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="card-img-top rounded shadow-lg"
          alt="Product Image"
        />
      </div>
      <div className="col-sm mt-4">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">
              Product Name
            </h3>
            {
              // For reviews icons etc
              <StarRating />
            }
            <div className="price text-third fw-bold mt-3">200 $</div>
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
            <div className="d-flex justify-content-center align-items-center">
              <div className="row justify-content-center">
                <div className="col-6 mt-3">
                  <div className="d-flex">
                    <div className="btn p-2" onClick={decreaseQuantity}>
                      <FontAwesomeIcon icon={faMinus} />
                    </div>
                    <div className="col-6">
                      <input
                        type="number"
                        className="form-control"
                        style={{ width: "60px" }}
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        min={0}
                        max={5}
                      />
                    </div>
                    <div className="btn p-2 " onClick={increaseQuantity}>
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                  </div>
                </div>
                <div
                  className="btn btn-success col-6 mt-3"
                  onClick={() => addToCartHandler()}
                >
                  <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mt-5">
        <div className="card p-1" style={{ border: "none" }}>
          <div className="card">
            <div className="card-body row">
              <div className="col-auto mr-auto">
                <img className="rounded-circle img-fluid" style={{ width: 55, height: 55 }}
                  src="https://images.unsplash.com/photo-1614595797408-3d57687a1c5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Profile Image" />
              </div>
              <div className="card-title col-auto h5 mr-auto mt-3">John Doe</div>
              <div className="col-auto mr-auto mt-3">
                <StarRating />
              </div>
              <div className="col text-end mt-3">10 October, 2023</div>
              <h4 class="mt-4">Product Name</h4>
              <p className="card-text my-2">
                Aenean et euismod tellus, vitae accumsan lorem.
                Cras et risus sodales tellus fermentum imperdiet vel a felis.
                Donec mollis mauris at leo volutpat, ac ultrices sapien malesuada.
                Praesent rutrum leo ac erat dignissim, ac molestie erat molestie.
              </p>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body row">
              <div className="col-auto mr-auto">
                <img className="rounded-circle img-fluid" style={{ width: 55, height: 55 }}
                  src="https://images.unsplash.com/photo-1614595797408-3d57687a1c5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Profile Image" />
              </div>
              <div className="card-title col-auto h5 mr-auto mt-3">John Doe</div>
              <div className="col-auto mr-auto mt-3">
                <StarRating />
              </div>
              <div className="col text-end mt-3">10 October, 2023</div>
              <h4 class="mt-4">Product Name</h4>
              <p className="card-text my-2">
                Aenean et euismod tellus, vitae accumsan lorem.
                Cras et risus sodales tellus fermentum imperdiet vel a felis.
                Donec mollis mauris at leo volutpat, ac ultrices sapien malesuada.
                Praesent rutrum leo ac erat dignissim, ac molestie erat molestie.
              </p>
            </div>
          </div>
        </div>
        {/* 
          FOR REVIEWS
          */
        }
      </div>
    </Layout>
  );
};

export default Product;
