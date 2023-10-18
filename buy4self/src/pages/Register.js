import React from "react";
import Layout from "../layout/Layout";

const Register = () => {
  return (
    <Layout>
      <div className=" d-flex justify-content-center align-items-center mb-5">
        <div class=" col-md-10 col-lg-10 col-xl-10">
          {" "}
          <div className="card">
            <div className="card-body row">
              {" "}
              <div className="col-6 d-flex justify-content-center">
                <img
                  src="https://hipokampus.com.tr/images/hizmetler/tr/fethiye-hipokampus-toplanti-odasi-is-birligi-yenilik-basari.webp"
                  className="img-fluid rounded"
                  alt="..."
                />
              </div>
              <div className="col-6 ">
                <h3 className="mb-5 text-center">Register</h3>

                <label className="form-label">Full Name</label>
                <div className="form-outline mb-4">
                  <input type="text" className="form-control form-control-md" />
                </div>
                <label className="form-label">Email</label>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    className="form-control form-control-md"
                  />
                </div>
                <label className="form-label">Phone</label>
                <div className="form-outline mb-4">
                  <input type="tel" className="form-control form-control-md" />
                </div>

                <label className="form-label">Password</label>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    className="form-control form-control-md"
                  />
                </div>

                <button className="btn btn-primary  col-12" type="submit">
                  Sign Up
                </button>

                <div className="text-center mt-3">
                  Are you already registered? <br />
                  <a
                    href="/login"
                    className="text-decoration-none link-primary"
                  >
                    You can click here to sign in.
                  </a>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
