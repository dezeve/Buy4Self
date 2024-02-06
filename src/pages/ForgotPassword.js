import React from "react";
import Layout from "../layout/Layout";

const ForgotPassword = () => {
  return (
    <Layout>
      <div className=" d-flex justify-content-center align-items-center mt-5 mb-5">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong">
            <div className="card-body p-5 text-center">
              <h3 className="mb-5">Password reset</h3>
              <label className="form-label">
                Enter your email for verification
              </label>
              <div className="form-outline mb-4">
                <input type="email" className="form-control form-control-md" />
              </div>
              <div className="btn btn-primary btn-md col-12">Recover password</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
