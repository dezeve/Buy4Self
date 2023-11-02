import React from "react";
import Layout from "../layout/Layout";
import PaymentStepper from "../components/PaymentStepper";
import PaymentCard from "../components/PaymentCard";

const Payment = () => {
    return (
        <Layout>
            <div className="border rounded">
                <h2 className="mt-3">Payment</h2>
                <hr className="mb-5 mt-3" />
                <div className="row mb-5 p-3 justify-content-evenly">
                    <div className="col-sm-7 border rounded p-3">
                        <PaymentStepper/>
                    </div>
                    <div className="col-sm-4 border rounded p-3">
                        <PaymentCard />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Payment;
