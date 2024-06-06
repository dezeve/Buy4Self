import { faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../layout/Layout";
import QuantitySelector from "../components/QuantitySelector";

const Cart = () => {
    return (
        <Layout>
            <div className="p-5 rounded">
                <h2 className="fw-bold">
                    <FontAwesomeIcon icon={faShoppingCart} className="mx-2" width={30} color="steelblue" />
                    Cart
                </h2>
                <hr className="mb-4" />
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
                                                Electronic
                                            </span>
                                        </div>
                                    </div>
                                </th>
                                <td className="border-0 align-middle">
                                    <strong className="text-danger">79.00 $</strong>
                                </td>
                                <td className="border-0 align-middle">
                                    <QuantitySelector />
                                </td>
                                <td className="border-0 align-middle">
                                    <a href="#" className="text-dark">
                                        <FontAwesomeIcon icon={faTrash} className="ms-4" size="lg" />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <div className="text-end strong fw-bold">
                        <label className="text-end"> Total: <span className="text-danger">79 $</span></label>
                        <br />
                        <label className="text-end"> Discount: <span className="text-danger">-20 $</span></label> <br />
                        <label className="text-end"> Total: <span className="text-danger">59 $</span></label>
                    </div>
                </div>
                <div className="mt-5 justify-content-center d-flex">
                    <a className="me-2" href="/">
                        <button type="button" className="btn btn btn-success fw-bold p-2">
                            Continue Shopping
                        </button>
                    </a>
                    <a href="/Payment">
                        <button type="button" className="btn btn-primary fw-bold p-2">
                            Proceed To Payment
                        </button>
                    </a>
                </div>
            </div>
        </Layout>
    );
};

export default Cart;
