import React from "react";
import Layout from "../layout/Layout";

const UserProfile = () => {
    return (
        <Layout>
            <div className="p-5 rounded" style={{backgroundColor:"#e6e6e6"}}>
                <p className="mb-5" style={{fontSize:"50px"}}><b>Profile</b></p>
                <hr></hr>
                <div class="d-flex mt-5">
                    <img src="https://images.unsplash.com/photo-1636955992879-c3c4d4cc2f2d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="rounded-circle" style={{width:"200px", height:"200px"}} alt="Avatar" />
                    <p style={{fontSize:"40px"}}><b>John Doe</b></p>
                </div>
            </div>
        </Layout>
    );
}

export default UserProfile;
