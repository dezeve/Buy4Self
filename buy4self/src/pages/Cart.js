import React from "react";
import Layout from "../layout/Layout";

const Cart = () => {
    return (
        <Layout>
            <div class="p-5 rounded" style={{backgroundColor:"#e6e6e6"}}>
                <h1>Cart</h1>
                <div className="mt-5 justify-content-center d-flex">
                    <button type="button" class="btn btn-primary">
                        <a href="/Payment" className="text-decoration-none text-white">
                            Proceed To Payment
                        </a>
                    </button>
                    &nbsp;
                    <button type="button" class="btn btn-success">
                        <a href="/" className="text-decoration-none text-white">
                            Continue Shopping
                        </a>
                    </button>
                </div>
            </div>
        </Layout>
    );
}

export default Cart;
