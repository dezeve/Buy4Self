import React from "react";
import { faCartShopping, faClipboardList, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PaymentCard = () => {
    return (
        <div className="p-2 mx-auto" style={{maxWidth: "500px"}}>
            <h4 className="fw-bold">
                <FontAwesomeIcon icon={faCreditCard} className="mx-2" color="green" />
                Card information
            </h4>
            <hr className="my-3" />
            <form className="my-4">
                <div class="form-floating mb-2 mt-4 mt-sm-2">
                    <input type="text" class="form-control" id="creditCardInputName" placeholder="Cart Number" />
                    <label htmlFor="creditCardInputName">Cart Number</label>
                </div>
                <div className="row gx-2">
                    <div class="form-floating mb-2 mt-2 col-6">
                        <input type="email" class="form-control" id="creditCardInputMmYy" placeholder="MM / YY" />
                        <label htmlFor="creditCardInputMmYy">MM / YY</label>
                    </div>
                    <div class="form-floating my-0 my-2 col-6">
                        <input type="tel" class="form-control" id="creditCardInputCvv" placeholder="CVV" />
                        <label htmlFor="creditCardInputCvv">CVV</label>
                    </div>
                </div>
                <div class="form-floating mb-2 mt-4 mt-sm-2">
                    <input type="text" class="form-control" id="creditCardInputName" placeholder="Name" />
                    <label htmlFor="creditCardInputName">Name</label>
                </div>
            </form>
            <h4 className="fw-bold">
                <FontAwesomeIcon icon={faClipboardList} className="mx-2" color="green" />
                Summary
            </h4>
            <hr className="my-3" />
            <div className="row mb-4">
                <div className="strong fw-bold col-12 col-md-6">
                    <p className="my-1">Total: <span className="text-danger">213 $</span></p>
                    <p className="my-1">Discount: <span className="text-danger">10 $</span></p>
                    <p className="my-1">Total: <span className="text-danger">203 $</span></p>
                </div>
            </div>
            <div className='d-grid'>
                <button type="submit" className="btn btn-success fw-bold mb-2">
                    Make payment
                </button>
                <button className="btn btn-outline-dark fw-bold">
                    <a href="/Cart">
                        <FontAwesomeIcon icon={faCartShopping} className="me-2" />
                        Go to your cart
                    </a>
                </button>
            </div>
        </div>
    )
}

export default PaymentCard;
