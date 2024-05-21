import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserProfileSidebar = () => {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="px-sm-2 p-3 bg-secondary bg-gradient rounded w-100">
                    <div className="d-flex flex-column align-items-sm-start px-3 pt-2 text-white">
                        <p className="h5 my-4"><b>Welcome, John Doe</b></p>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-sm-start gap-3" id="menu">
                            <li className="nav-item">
                                <a href="/Settings" className="nav-link align-middle px-0">
                                    <FontAwesomeIcon icon={faUser} />&nbsp;Account settings
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/OrderHistory" className="nav-link align-middle px-0">
                                    <FontAwesomeIcon icon={faFile} />&nbsp;Order history
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/Reviews" className="nav-link align-middle px-0">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />&nbsp;Your reviews
                                </a>
                            </li>
                            <li className="nav-item mb-3">
                                <a href="/Cart" className="nav-link align-middle px-0">
                                    <FontAwesomeIcon icon={faCartShopping} />&nbsp;Go to your cart
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
