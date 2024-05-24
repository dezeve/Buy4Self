import React from "react";
import Layout from "../layout/Layout";

const Login = () => {
  return (
    <Layout>
      <div className=" d-flex justify-content-center align-items-center">
        <div className=" col-md-10 col-lg-10 col-xl-10">
          <div className="card shadow-2-strong mt-4 mx-auto" style={{ maxWidth: "400px" }}>
            <div className="card-body">
              <div className="col-sm">
                <h3 className="mt-4 text-center">Login</h3>
                <div class="form-floating mb-2 mt-4">
                  <input type="text" class="form-control" id="registerInputName" placeholder="Enter Your Name Here" />
                  <label htmlFor="registerInputName">Name</label>
                </div>
                <div class="form-floating mt-2 mb-4">
                  <input type="password" class="form-control" id="signInInputPassword" placeholder="Enter Your Password Here" />
                  <label htmlFor="signInInputPassword">Password</label>
                </div>
                <div className="row mb-0">
                  <div className="col d-flex ">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Remember password
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <a
                      href="/forgot-password"
                      className="text-decoration-none float-end text-primary"
                      style={{display: "list-item", listStyleType: "none"}}
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div>
                  <a href="/Settings" className="text-decoration-none text-white btn btn-primary btn-md btn-block col-12 my-3">
                    Sign in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
