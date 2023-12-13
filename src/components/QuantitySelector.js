import { faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const QuantitySelector = () => {
    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => {
        quantity < 5 && setQuantity(quantity + 1);
    };
    const decreaseQuantity = () => {
        quantity > 1 && setQuantity(quantity - 1);
    };

    return (
        <div className="d-flex">
            <div class="btn p-2" onClick={decreaseQuantity}>
                <FontAwesomeIcon icon={faMinus} />
            </div>
            <strong className=" p-2">{quantity}</strong>
            <div class="btn p-2" onClick={increaseQuantity}>
                <FontAwesomeIcon icon={faPlus} />
            </div>
        </div>
    )
}

export default QuantitySelector;
