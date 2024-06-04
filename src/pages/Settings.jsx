import React from "react";
import UserProfileLayout from "../layout/UserProfileLayout";
import { faKey, faImage, faUser, faUpload, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Settings = () => {
  return (
    <UserProfileLayout>
      <div
        className="form mx-auto"
        style={{ maxWidth: "1024px" }}
      >
        <h4 className="fw-bold mt-3">
          <FontAwesomeIcon icon={faPenToSquare} className="me-2" color="blue" />
          Edit your profile</h4>
        <hr />
        <div className="border rounded pt-0 pb-3 px-3 m-auto">
          <div className="form-body my-4">
            <p className="h5 fw-bold mb-4">
              <FontAwesomeIcon icon={faUser} className="me-2" color="darkslategray" />
              Change your profile details
            </p>
            <div className="row gx-2">
              <div className="col-12 col-md-6 mb-2 mb-md-0 form-floating">
                <input type="text" className="form-control" id="settingsNameInput" placeholder="Enter Your Name Here" />
                <label htmlFor="settingsNameInput" className="ms-2">Name</label>
              </div>
              <div className="col-12 col-md-6 form-floating">
                <input type="text" className="form-control" id="settingsSurnameInput" placeholder="Enter Your Surname Here" />
                <label htmlFor="settingsSurnameInput" className="ms-2">Surname</label>
              </div>
            </div>
            <div className="row gx-2 mt-2">
              <div className="col-12 col-md-6 mb-2 mb-md-0 form-floating">
                <input type="tel" className="form-control" id="settingsTelInput" placeholder="Enter Your Phone Number Here" />
                <label htmlFor="settingsTelInput" className="ms-2">Phone</label>
              </div>
              <div className="col-12 col-md-6 form-floating">
                <input type="email" className="form-control" id="settingsEmailInput" placeholder="Enter Your Email Here" />
                <label htmlFor="settingsEmailInput" className="ms-2">Email</label>
              </div>
            </div>
            <p className="h5 fw-bold my-4">
              <FontAwesomeIcon icon={faKey} className="me-2" color="darkgoldenrod" />
              Change your password
            </p>
            <div className="row gx-2 mt-2">
              <div className="col-12 col-md-6 form-floating">
                <input type="tel" className="form-control mb-2 mb-md-0" id="settingsPasswordInput" placeholder="Enter Your Password" />
                <label htmlFor="settingsPasswordInput" className="ms-2">Password</label>
              </div>
              <div className="col-12 col-md-6 form-floating">
                <input type="email" className="form-control" id="settingsPasswordCheckInput" placeholder="Re-enter Your Password" />
                <label htmlFor="settingsPasswordCheckInput" className="ms-2">Confirm Password</label>
              </div>
            </div>
            <p className="h5 my-4 fw-bold">
              <FontAwesomeIcon icon={faImage} className="me-2" color="green" />
              Change your profile picture
            </p>
            <div className="mt-4 mx-2 mx-lg-0 row justify-content-center">
              <div className="btn btn-lg col-12 btn-outline-success" style={{ maxWidth: "400px" }}>
                <label
                  role="button"
                  className="form-label m-1 fw-bold"
                  for="userProfilePicture"
                >
                  <FontAwesomeIcon icon={faUpload} width={35} height={35} style={{ marginBottom: "2px" }} />
                  Select File to Upload
                </label>
                <input
                  type="file"
                  className="form-control d-none mb-5"
                  id="userProfilePicture"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-primary fw-bold py-2 px-3">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </UserProfileLayout>
  );
}

export default Settings;
