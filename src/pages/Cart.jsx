import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../layout/Layout";
import QuantitySelector from "../components/QuantitySelector";

const Cart = () => {
  return (
    <Layout>
      <div className="p-5 rounded">
        <h1>Cart</h1>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="border-0 bg-light">
                  <div className="p-2 px-3 text-uppercase">Product</div>
                </th>
                <th scope="col" className="border-0 bg-light">
                  <div className="py-2 text-uppercase">Price</div>
                </th>
                <th scope="col" className="border-0 bg-light">
                  <div className="py-2 text-uppercase">Quantity</div>
                </th>
                <th scope="col" className="border-0 bg-light">
                  <div className="py-2 text-uppercase">Remove</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-0">
                  <div className="p-2">
                    <img
                      src="https://bootstrapious.com/i/snippets/sn-cart/product-1.jpg"
                      alt=""
                      width="70"
                      className="img-fluid rounded shadow-sm"
                    />
                    <div className="ml-3 d-inline-block align-middle p-3">
                      <h5 className="mb-0">
                        <a
                          href="#"
                          className="text-dark d-inline-block align-middle text-decoration-none"
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
                <td className="border-0 align-middle">
                  <strong>79.00 TL</strong>
                </td>
                <td className="border-0 align-middle">
                  <QuantitySelector />
                </td>
                <td className="border-0 align-middle">
                  <a href="#" className="text-dark">
                    <FontAwesomeIcon icon={faTrash} className="ml-2" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <hr />
          <div className="text-end strong fw-bold" style={{fontFamily:"Times New Roman"}}>
            <label className="text-end"> Total: 213 TL</label>
            <br />
            <label className="text-end"> Discount: -10 TL</label> <br />
            <label className="text-end"> Total: 203 TL</label>
          </div>
        </div>

        <div className="mt-5 justify-content-center d-flex">
        <button type="button" className="btn btn-success">
            <a href="/">
              Continue Shopping
            </a>
          </button>
          &nbsp;
          <button type="button" className="btn btn-primary">
            <a href="/Payment">
              Proceed To Payment
            </a>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
