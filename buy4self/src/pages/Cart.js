import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Layout from "../layout/Layout";

const Cart = () => {
      const [quantity, setQuantity] = useState(1);
     const increaseQuantity = () => {
       quantity < 5 && setQuantity(quantity + 1);
     };
     const decreaseQuantity = () => {
       quantity > 1 && setQuantity(quantity - 1);
     };
  return (
    <Layout>
      <div class="p-5 rounded">
        <h1>Cart</h1>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col" class="border-0 bg-light">
                  <div class="p-2 px-3 text-uppercase">Product</div>
                </th>
                <th scope="col" class="border-0 bg-light">
                  <div class="py-2 text-uppercase">Price</div>
                </th>
                <th scope="col" class="border-0 bg-light">
                  <div class="py-2 text-uppercase">Quantity</div>
                </th>
                <th scope="col" class="border-0 bg-light">
                  <div class="py-2 text-uppercase">Remove</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" class="border-0">
                  <div class="p-2">
                    <img
                      src="https://bootstrapious.com/i/snippets/sn-cart/product-1.jpg"
                      alt=""
                      width="70"
                      class="img-fluid rounded shadow-sm"
                    />
                    <div class="ml-3 d-inline-block align-middle p-3">
                      <h5 class="mb-0">
                        {" "}
                        <a
                          href="#"
                          class="text-dark d-inline-block align-middle text-decoration-none"
                        >
                          Timex Unisex Originals
                        </a>
                      </h5>

                      <span className="badge rounded-pill text-bg-light mb-2">
                        Elektronik
                      </span>
                    </div>
                  </div>
                </th>
                <td class="border-0 align-middle">
                  <strong>79.00 TL</strong>
                </td>
                <td class="border-0 align-middle">
                  {" "}
                  <div className="d-flex">
                    <div class="btn p-2" onClick={decreaseQuantity}>
                      <FontAwesomeIcon icon={faMinus} />
                    </div>
                    <strong className=" p-2">{quantity}</strong>
                    <div class="btn p-2" onClick={increaseQuantity}>
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                  </div>
                </td>
                <td class="border-0 align-middle">
                  <a href="#" class="text-dark">
                    <FontAwesomeIcon icon={faTrash} className="ml-2" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <hr />
          <label className="text-end"> Total: 213 TL</label>
          <br />
          <label className="text-end"> Discount: -10 TL</label> <br />
          <label className="text-end"> Total: 203 TL</label>
        </div>

        <div className="mt-5 justify-content-center d-flex">
        <button type="button" class="btn btn-success">
            <a href="/" className="text-decoration-none text-white">
              Continue Shopping
            </a>
          </button>
          &nbsp;
          <button type="button" class="btn btn-primary">
            <a href="/Payment" className="text-decoration-none text-white">
              Proceed To Payment
            </a>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
