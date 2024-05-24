import React from "react";
import Layout from "../layout/Layout";

const Register = () => {
  return (
    <Layout>
      <div className=" d-flex justify-content-center align-items-center mb-5">
        <div className="col-12 col-md-10">
          <div className="card mx-auto mt-4" style={{ maxWidth: "500px" }}>
            <div className="card-body row">
              <div className="col-sm">
                <h3 className="mb-4 mt-3 text-center">Register</h3>
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
