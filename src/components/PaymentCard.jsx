import React from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PaymentCard = () => {
    return (
        <div className="border rounded py-4 px-2">
            <h3>Card information</h3>
            <hr className="my-3"/>
            <form className="my-4">
                <label>Card number</label>
                <input type="text" placeholder="Enter your card number here" className="form-control mb-3" />
                <div className="row mb-3">
                    <div className="col-12 col-md-6">
                        <label className="form-label">MM / YY</label>
                        <input type="text" placeholder="MM / YY" className="form-control" />
                    </div>
                    <div className="col-12 col-md-6">
                        <label for="exampleInputEmail1" className="form-label">CVV code</label>
                        <input type="password" placeholder="CVV code" className="form-control" />
                    </div>
                </div>
                <label>Name</label>
                <input type="text" placeholder="Name on the card" className="form-control" />
            </form>
            <hr />
            <div className="row">
                <div className="strong fw-bold col-12 col-md-6">
                    <label> Total: 213 TL</label>
                    <br />
                    <label> Discount: -10 TL</label> <br />
                    <label> Total: 203 TL</label>
                </div>
                <div className="col-12 col-md-6 justify-content-center d-flex">
                    <button className="btn btn-secondary">
                        <a href="/Cart">
                            <FontAwesomeIcon icon={faCartShopping} /><br />Go to your cart
                        </a>
                    </button>
                </div>
            </div>
            <hr />
            <div className='d-grid'>
                <button type="submit" className="btn btn-primary mb-2 mt-3">
                    Make payment
                </button>
            </div>
        </div>
    )
}

export default PaymentCard;
