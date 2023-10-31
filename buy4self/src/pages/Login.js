import React from "react";
import Layout from "../layout/Layout";

const Login = () => {
  return (
    <Layout>
      {" "}
      <div class=" d-flex justify-content-center align-items-center">
        {" "}
        <div class=" col-md-10 col-lg-10 col-xl-10">
          <div class="card shadow-2-strong">
            <div class="card-body p-5 row">
              <div className="col-sm mb-5 mb-md-0 d-flex justify-content-center align-items-center">
                {" "}
                <img
                  src="https://hipokampus.com.tr/images/hizmetler/tr/fethiye-hipokampus-toplanti-odasi-is-birligi-yenilik-basari.webp"
                  className="img-fluid rounded"
                  alt="..."
                />
              </div>
              <div className="col-sm">
                <h3 class="mb-4 text-center">Login</h3>

                <label class="form-label">Email</label>
                <div class="form-outline mb-4">
                  <input type="email" class="form-control form-control-md" />
                </div>

                <label class="form-label">Password</label>
                <div class="form-outline mb-4">
                  <input type="password" class="form-control form-control-md" />
                </div>

                <div class="row mb-4">
                  <div class="col d-flex ">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" />
                      <label class="form-check-label">
                        {" "}
                        Remember password{" "}
                      </label>
                    </div>
                  </div>

                  <div class="col">
                    <a
                      href="/forgot-password"
                      className="text-decoration-none float-end"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>

                <br />

                <div class="btn btn-primary btn-md btn-block col-12">
                  <a href="/Settings" className="text-decoration-none text-white">Sign in</a>
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
