import React from "react";
import products from "../dummyData/products.json"
import { faList, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OrderTable = () => {
    return (
        <div className="p-3 px-1">
            <div>
                <h4 className="fw-bold mb-4">
                    <FontAwesomeIcon icon={faList} className="me-2" color="blue" />
                    Order history
                </h4>
            </div>
            <hr style={{marginBottom: "-10px"}} />
            <div className="table w-100 mt-3 mb-3">
                <table className="table w-100 order-table">
                    {products.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>
                                    <img src={val.img}
                                        style={{ width: 125, height: 90, borderRadius: "15px" }} />
                                </td>
                                <td className="fs-6">{val.name}</td>
                                <td style={{ color: "red" }} className="fw-bold">{val.price} $</td>
                                <td className="fs-5">
                                    <button className="btn btn-primary px-3">
                                        <FontAwesomeIcon icon={faMessage} className="me-2" />Add review
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}

export default OrderTable;
