import React from "react";
import Layout from "../layout/Layout";

const SignUp = () => {
  return (
    <Layout>
      <div className=" d-flex justify-content-center align-items-center mb-5">
        <div className="col-12 col-md-10">
          <div className="card mx-auto mt-4 p-2" style={{ maxWidth: "400px" }}>
            <div className="card-body">
              <div className="col-sm">
                <h3 className="mt-3 text-center fw-bold">Sign Up</h3>
                <div class="form-floating mb-2 mt-4">
                  <input type="text" class="form-control" id="registerInputName" placeholder="Enter Your Name Here" />
                  <label htmlFor="signUpInputName">Name</label>
                </div>
                <div class="form-floating my-2">
                  <input type="email" class="form-control" id="registerInputEmail" placeholder="Enter Your Email Here" />
                  <label htmlFor="signUpInputEmail">Email</label>
                </div>
                <div class="form-floating my-2">
                  <input type="tel" class="form-control" id="registerInputPhone" placeholder="Enter Your Phone Number Here" />
                  <label htmlFor="signUpInputPhone">Phone Number</label>
                </div>
                <div class="form-floating my-2">
                  <input type="password" class="form-control" id="registerInputPassword" placeholder="Enter Your Password Here" />
                  <label htmlFor="signUpInputPassword">Password</label>
                </div>
                <div class="form-floating mt-2 mb-4">
                  <input type="password" class="form-control" id="registerInputPassword" placeholder="Enter Your Password Here" />
                  <label htmlFor="signUpInputPassword">Enter Your Password Again</label>
                </div>
                <button className="btn btn-primary col-12 fw-bold" type="submit">
                  Sign Up
                </button>
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
      </div>
    </Layout>
  );
};

export default SignUp;
