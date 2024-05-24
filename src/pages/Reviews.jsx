import React from "react";
import UserProfileLayout from "../layout/UserProfileLayout";
import products from "../dummyData/products.json";
import StarRating from "../components/StarRating";

const Reviews = () => {
    return (
        <UserProfileLayout>
            <div>
                {products.map((item, index) => (
                    <div key={index}>
                        <div className="card">
                            <div className="card-body row">
                                <div className="col-auto mr-auto">
                                    <img className="rounded-circle img-fluid" style={{ width: 55, height: 55 }}
                                        src="https://images.unsplash.com/photo-1614595797408-3d57687a1c5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                </div>
                                <div className="card-title col-auto h5 mr-auto mt-3">John Doe</div>
                                <div className="col-auto mr-auto mt-3"><StarRating /></div>
                                <div className="col text-end mt-3">10 October, 2023</div>
                                <h4 className="mt-4">{item.name}</h4>
                                <p className="card-text mt-2">{item.reviews[1].comment}</p>
                            </div>
                        </div>
                        <br />
                    </div>
                ))}
            </div>
        </UserProfileLayout>
    );
}

export default Reviews;
