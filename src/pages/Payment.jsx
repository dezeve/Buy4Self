import React from "react";
import Layout from "../layout/Layout";
import PaymentStepper from "../components/PaymentStepper";
import PaymentCard from "../components/PaymentCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Payment = () => {
    return (
        <Layout>
            <div>
                <h2 className="mt-3 fw-bold">
                    <FontAwesomeIcon icon={faCreditCard} className="me-2" color="green"/>
                    Payment</h2>
                <hr className="my-3" />
                <div className="row gx-3 mb-5 justify-content-center">
                    <div className="col-12 col-lg-8">
                        <PaymentStepper />
                    </div>
                    <div className="col-12 col-lg-4 mt-4 mt-lg-0">
                        <PaymentCard />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Payment;
