import React from "react";
import Layout from "../layout/Layout";

const Register = () => {
  return (
    <Layout>
      <div classNameName=" d-flex justify-content-center align-items-center mb-5">
        <div className=" col-md-10 col-lg-10 col-xl-10">
          {" "}
          <div classNameName="card">
            <div classNameName="card-body row">
              {" "}
              <div classNameName="col-sm d-flex justify-content-center align-items-center mb-5 md-mb-0">
                <img
                  src="https://hipokampus.com.tr/images/hizmetler/tr/fethiye-hipokampus-toplanti-odasi-is-birligi-yenilik-basari.webp"
                  classNameName="img-fluid rounded"
                  alt="..."
                />
              </div>
              <div classNameName="col-sm">
                <h3 classNameName="mb-5 text-center">Register</h3>

                <label classNameName="form-label">Full Name</label>
                <div classNameName="form-outline mb-4">
                  <input type="text" classNameName="form-control form-control-md" />
                </div>
                <label classNameName="form-label">Email</label>
                <div classNameName="form-outline mb-4">
                  <input
                    type="email"
                    classNameName="form-control form-control-md"
                  />
                </div>
                <label classNameName="form-label">Phone</label>
                <div classNameName="form-outline mb-4">
                  <input type="tel" classNameName="form-control form-control-md" />
                </div>

                <label classNameName="form-label">Password</label>
                <div classNameName="form-outline mb-4">
                  <input
                    type="password"
                    classNameName="form-control form-control-md"
                  />
                </div>

                <button classNameName="btn btn-primary  col-12" type="submit">
                  Sign Up
                </button>

                <div classNameName="text-center mt-3">
                  Are you already registered? <br />
                  <a
                    href="/login"
                    classNameName="text-decoration-none link-primary"
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
