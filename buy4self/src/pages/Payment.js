import React from "react";
import Layout from "../layout/Layout";
import PaymentStepper from "../components/PaymentStepper";

const Payment = () => {
    return (
        <Layout>
            <div className="w-75 m-auto border rounded">
                <h2 className="mt-3">Payment</h2>
                <hr className="mb-5 mt-3" />
                <div className="row mb-5 p-3">
                    <div className="col-sm-6 border rounded p-3">
                        <PaymentStepper/>
                    </div>
                    <div className="col-sm-6">
                        Payment
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Payment;
