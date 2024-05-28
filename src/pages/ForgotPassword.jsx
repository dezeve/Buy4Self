import React from "react";
import Layout from "../layout/Layout";

const ForgotPassword = () => {
  return (
    <Layout>
      <div className=" d-flex justify-content-center align-items-center mt-5 mb-5">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong mx-auto" style={{ maxWidth: "500px" }}>
            <div className="card-body p-5 text-center">
              <h3 className="mb-5 fw-bold">Password Recovery</h3>
              <div class="form-floating mt-2 mb-4">
                <input type="email" class="form-control" id="recoveryEmail" placeholder="Enter Your Email to Verify" />
                <label htmlFor="recoveryEmail">Email</label>
              </div>
              <a href="/sign-in">
                <div className="btn btn-primary btn-md fw-bold col-12">
                  Recover password
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
