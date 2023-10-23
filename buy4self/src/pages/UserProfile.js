import React from "react";
import Layout from "../layout/Layout";
import "../css/Button.css";

const UserProfile = () => {
    return (
        <Layout>
            <div className="p-5 rounded" style={{backgroundColor:"#e6e6e6"}}>
                <p className="mb-5" style={{fontSize:"50px"}}><b>Profile</b></p>
                <hr />
                <div class="d-flex flex-column mt-5 justify-content-center align-items-center">
                    <img src="https://images.unsplash.com/photo-1636955992879-c3c4d4cc2f2d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="rounded-circle" style={{width:"200px", height:"200px"}} alt="Avatar" />
                    <p className="mt-3" style={{fontSize:"40px"}}><b>John Doe</b></p>
                </div>
                <div class="mt-5 nav d-flex flex-column nav-pills justify-content-center align-items-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <div className="d-grid gap-2 w-50">
                        <button className="userProfileButton nav-item">
                            Account settings
                        </button>
                        <button className="userProfileButton nav-item">
                            Order history
                        </button>
                        <button className="userProfileButton nav-item">
                            Contact us
                        </button>
                        <button className="userProfileButton nav-item">
                            Your reviews
                        </button>
                        <button className="userProfileButton nav-item">
                            Go to your cart
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default UserProfile;
