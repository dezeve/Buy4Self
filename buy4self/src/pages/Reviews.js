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
                                    <img className="rounded-circle img-fluid" style={{width:75, height:75}}
                                    src="https://hipokampus.com.tr/images/hizmetler/tr/fethiye-hipokampus-essiz-coworking-ofis-is-birligi-verimlilik.webp" />
                                </div>
                                <div className="card-title col-auto mr-auto mt-4">Mustafa KAÇAR</div>
                                <div className="col-auto mr-auto mt-4"><StarRating /></div>
                                <div className="col text-end mt-4">10 October, 2023</div>
                            <h4 className="mt-3">{item.name}</h4>
                            <p className="card-text mt-3">{item.reviews[1].comment}</p>
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
