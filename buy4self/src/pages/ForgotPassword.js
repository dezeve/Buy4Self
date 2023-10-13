import React from "react";
import Layout from "../layout/Layout";

const ForgotPassword = () => {
  return (
    <Layout>
      <div class=" d-flex justify-content-center align-items-center mt-5 mb-5">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong">
            <div class="card-body p-5 text-center">
              <h3 class="mb-5">Password reset</h3>
              <label class="form-label">
                Enter your email for verification
              </label>
              <div class="form-outline mb-4">
                <input type="email" class="form-control form-control-md" />
              </div>
              <div class="btn btn-primary btn-md col-12">Recover password</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
