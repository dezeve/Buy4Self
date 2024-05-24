import React from "react";
import Layout from "../layout/Layout";

const Login = () => {
  return (
    <Layout>
      <div className=" d-flex justify-content-center align-items-center">
        <div className=" col-md-10 col-lg-10 col-xl-10">
          <div className="card shadow-2-strong mt-4 mx-auto" style={{ maxWidth: "500px" }}>
            <div className="card-body p-5">
              <div className="col-sm">
                <h3 className="mb-4 text-center">Login</h3>
                <label className="form-label">Email</label>
                <div className="form-outline mb-4">
                  <input type="email" className="form-control form-control-md" />
                </div>

                <label className="form-label">Password</label>
                <div className="form-outline mb-4">
                  <input type="password" className="form-control form-control-md" />
                </div>

                <div className="row mb-4">
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
                <br />
                <div >
                  <a href="/Settings" className="text-decoration-none text-white btn btn-primary btn-md btn-block col-12" >
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
