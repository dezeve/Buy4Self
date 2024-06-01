import React from "react";
import products from "../dummyData/products.json"

const OrderTable = () => {
    return (
        <div className="container p-3 border rounded">
            <div>
                <h1 className="fs-5">Order history</h1>
            </div>
            <hr />
            <div className="table w-100 mt-3 mb-3">
                <table className="table">
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>&nbsp;</th>
                    </tr>
                    {products.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.price}</td>
                                <td><img src={val.img} style={{ width: 100, height: 100 }}></img></td>
                                <td><button className="btn btn-primary">Add review</button></td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}

export default OrderTable;
