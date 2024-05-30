import React from "react";
import { faCrow, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserProfileSidebar = () => {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="px-sm-2 p-3 bg-secondary rounded w-100">
                    <div className="d-flex flex-column align-items-sm-start px-3 pt-2 text-white">
                        <p className="h4 fw-bold my-4">
                            <FontAwesomeIcon width={35} className="me-2" icon={faCrow} />
                            Welcome, John Doe</p>
                        <ul
                            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-sm-start gap-2 fs-6 fw-bold"
                            id="menu"
                        >
                            <li className="nav-item">
                                <a href="/Settings" className="nav-link">
                                    <FontAwesomeIcon width={20} icon={faUser} className="me-2" />Account settings
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/OrderHistory" className="nav-link">
                                    <FontAwesomeIcon width={20} icon={faFile} className="me-2" />Order history
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/Reviews" className="nav-link">
                                    <FontAwesomeIcon width={20} icon={faMagnifyingGlass} className="me-2" />Your reviews
                                </a>
                            </li>
                            <li className="nav-item mb-3">
                                <a href="/Cart" className="nav-link">
                                    <FontAwesomeIcon width={20} icon={faCartShopping} className="me-2" />Go to your cart
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileSidebar;
