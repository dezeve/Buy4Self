import React from "react";
import Layout from "../layout/Layout";
import "../css/Buttons.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserProfile = () => {
    return (
        <Layout>
            <div className="p-5 rounded" style={{backgroundColor:"#e6e6e6"}}>

                <div className="row mb-5">
                    <p className="col" style={{fontSize:"50px"}}><b>Profile</b></p>
                    <button className="userProfileButton col-md-2 ml-auto h-50">
                        <a href="/">
                            Continue shopping &nbsp; <FontAwesomeIcon icon={faTag} />
                        </a>
                    </button>
                </div>

                <hr />

                <div class="d-flex flex-column mt-5 mb-3 justify-content-center align-items-center">
                    <img src="https://images.unsplash.com/photo-1636955992879-c3c4d4cc2f2d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="rounded-circle" style={{width:"200px", height:"200px"}} alt="Avatar" />
                    <p className="mt-3" style={{fontSize:"40px"}}><b>John Doe</b></p>
                </div>

                <div class="p-3 rounded w-75 m-auto border border-dark" style={{backgroundColor:"#999999"}}>
                    <div class="mt-5 mb-5 nav d-flex flex-column nav-pills justify-content-center align-items-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <div className="d-grid gap-2 w-75">
                            <button className="userProfileButton nav-item" data-bs-toggle="modal" data-bs-target="#userModal">
                                <FontAwesomeIcon icon={faUser} /> <br /> Account settings
                            </button>

                            <div class="modal fade" id="userModal" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5">Edit your profile</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body mt-3 mb-3">
                                        <p className="h5"><b> <FontAwesomeIcon icon={faUser} />&nbsp;Change your username</b></p>
                                        <input class="form-control" type="text" placeholder="Enter your username here" />

                                        <br /> <br />

                                        <p className="h5"><FontAwesomeIcon icon={faKey} />&nbsp;<b>Change your password</b></p>
                                        <input class="form-control mb-2" type="password" placeholder="Enter your password here" />
                                        <input class="form-control" type="password" placeholder="Re-enter your password" />

                                        <br /> <br />

                                        <p className="h5"><FontAwesomeIcon icon={faImage} />&nbsp;<b>Change your profile picture</b></p>
                                        <div className="d-flex justify-content-center mt-4">
                                            <div className="userProfileButton">
                                                <label role="button" class="form-label m-1" for="userProfilePicture">Choose picture</label>
                                                <input type="file" class="form-control d-none" id="userProfilePicture" />
                                            </div>
                                        </div>

                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                    </div>
                                </div>
                            </div>


                            <button className="userProfileButton nav-item">
                                <a class="nav-link" href="#orderHistory">
                                    <FontAwesomeIcon icon={faFile} /> <br /> Order history
                                </a>
                            </button>
                            <button className="userProfileButton nav-item">
                                <a href="/Contact">
                                    <FontAwesomeIcon icon={faSquareEnvelope} /> <br /> Contact us
                                </a>
                            </button>
                            <button className="userProfileButton nav-item">
                                <FontAwesomeIcon icon={faMagnifyingGlass} /> <br /> Your reviews
                            </button>
                            <button className="userProfileButton nav-item">
                                <a href="/Cart">
                                    <FontAwesomeIcon icon={faCartShopping} /> <br /> Go to your cart
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                <br />

                <hr />

                <br />

                <div id="orderHistory" className="p-5 rounded w-75 m-auto border border-dark" style={{backgroundColor:"#b6cad9"}}>
                    <p style={{fontSize:"35px"}} className="mb-3"><b>Order History</b></p>


                    <div className="p-5 rounded w-100 m-auto border border-dark" style={{backgroundColor:"#f2f2f2"}}>
                        <h4 className="mb-5">Order #00000001 <span class="badge bg-success">Delivered</span></h4>
                        <h5 className="mb-3">Product #0001 <br />10 October, 2023 | 11:20</h5>

                        <div>
                            <img
                                src="https://bootstrapious.com/i/snippets/sn-cart/product-1.jpg"
                                alt=""
                                width="70"
                                class="img-fluid rounded shadow-sm"
                            />
                            <div class="ml-3 d-inline-block align-middle p-3">
                                <h5 class="mb-0">
                                    {" "}
                                    <a
                                    href="#"
                                    class="text-dark d-inline-block align-middle text-decoration-none"
                                    >
                                    Timex Unisex Originals
                                    </a>
                                </h5>
                                <span className="badge rounded-pill text-bg-light mb-2">
                                    Elektronik
                                </span>
                            </div>
                        </div>

                        <div className="mt-3">
                            <p className="h5 bold">Total: 203₺</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default UserProfile;
