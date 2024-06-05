import React from "react";
import Layout from "../layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  return (
    <Layout>
      <div className="d-flex justify-content-center align-items-center mb-5">
        <div className="col-12">
          <div className="card mx-auto mt-4 p-2" style={{ maxWidth: "768px" }}>
            <div className="card-body">
              <div className="row gx-2">
                <h3 className="mt-2 mb-5 mb-sm-3 text-center fw-bold">
                  Sign Up
                </h3>
                <h4 className="fw-bold">
                  <FontAwesomeIcon icon={faUser} className="me-2" />
                  Account Information
                </h4>
                <hr className="mb-0 mb-sm-2 mt-1 py-0" />
                <div class="form-floating mb-2 mt-4 mt-sm-2 col-12 col-sm-6">
                  <input type="text" class="form-control" id="signUpInputName" placeholder="Enter Your Name Here" />
                  <label htmlFor="signUpInputName">Name</label>
                </div>
                <div class="form-floating my-0 my-sm-2 col-12 col-sm-6">
                  <input type="text" class="form-control" id="signUpInputSurname" placeholder="Enter Your Surname Here" />
                  <label htmlFor="signUpInputSurname">Surname</label>
                </div>
              </div>
              <div className="row gx-2">
                <div class="form-floating mb-2 mt-4 mt-sm-2 col-12 col-sm-6">
                  <input type="email" class="form-control" id="signUpInputEmail" placeholder="Enter Your Email Here" />
                  <label htmlFor="signUpInputEmail">Email</label>
                </div>
                <div class="form-floating my-0 my-sm-2 col-12 col-sm-6">
                  <input type="tel" class="form-control" id="signUpInputPhone" placeholder="Enter Your Phone Number Here" />
                  <label htmlFor="signUpInputPhone">Phone Number</label>
                </div>
              </div>
              <h4 className="fw-bold mt-4 mt-sm-3">
                <FontAwesomeIcon icon={faKey} className="me-2" />
                Password
              </h4>
              <hr className="mb-0 mb-sm-2 mt-1 py-0" />
              <div className="row gx-2 mb-4 mb-sm-3">
                <div class="form-floating mb-2 mt-4 mt-sm-2 col-12 col-sm-6">
                  <input type="password" class="form-control" id="signUpInputPassword" placeholder="Enter Your Password Here" />
                  <label htmlFor="signUpInputPassword">Password</label>
                </div>
                <div class="form-floating my-0 my-sm-2 col-12 col-sm-6">
                  <input type="password" class="form-control" id="signUpInputPassword" placeholder="Enter Your Password Here" />
                  <label htmlFor="signUpInputPassword">Enter Your Password Again</label>
                </div>
              </div>
              <a href="/sign-in">
                <button className="btn btn-primary col-12 fw-bold" type="submit">
                  Sign Up
                </button>
              </a>
              <div className="text-center mt-3">
                Are you already registered? <br />
                <a
                  href="/sign-in"
                  className="text-decoration-none link-primary"
                >
                  You can click here to sign in.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
