import React from "react";
import UserProfileLayout from "../layout/UserProfileLayout";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Settings = () => {
    return (
      <UserProfileLayout>
        <div className="form">
          <div className="border rounded p-3 m-auto">
            <h1 className="fs-5 fw-bold">Edit your profile</h1>

            <hr />

            <div className="form-body my-4">
              <p className="h5">
                <b>
                  {" "}
                  <FontAwesomeIcon icon={faUser} />
                  &nbsp;Change your profile details
                </b>
              </p>

              <input
                className="form-control mb-2"
                type="text"
                placeholder="Enter your username here"
              />

              <p className="h5 fw-bold my-4"><FontAwesomeIcon icon={faKey} />
                &nbsp;Change your password
              </p>
              <input
                className="form-control mb-2"
                type="password"
                placeholder="Enter your password here"
              />
              <input
                className="form-control mb-2"
                type="password"
                placeholder="Re-enter your password"
              />
              <p className="h5 my-4">
                <FontAwesomeIcon icon={faImage} />
                &nbsp;<b>Change your profile picture</b>
              </p>
              <div className="mt-4">
                <div className="btn btn-success">
                  <label
                    role="button"
                    className="form-label m-1"
                    for="userProfilePicture"
                  >
                    Choose picture
                  </label>
                  <input
                    type="file"
                    className="form-control d-none mb-5"
                    id="userProfilePicture"
                  />
                </div>
              </div>
            </div>
              <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-primary">
                    Save changes
                </button>
              </div>
          </div>
        </div>
      </UserProfileLayout>
    );
}

export default Settings;
