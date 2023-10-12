import React from "react";

const Sidebar = () => {
    return (
        <div class="container-fluid">
            <div class="row flex-nowrap">
                <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style={{backgroundColor:"#6A95A2"}}>
                    <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <br />
                        <h4>Categories</h4>
                        <br />
                        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li>
                                <a href="#" class="nav-link px-0 align-middle text-white">
                                    <span class="ms-1 d-none d-sm-inline">Furniture</span></a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0 align-middle text-white">
                                    <span class="ms-1 d-none d-sm-inline">Electronics</span></a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0 align-middle text-white">
                                    <span class="ms-1 d-none d-sm-inline">Movies</span></a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0 align-middle text-white">
                                    <span class="ms-1 d-none d-sm-inline">Books</span></a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0 align-middle text-white">
                                    <span class="ms-1 d-none d-sm-inline">Accesories</span></a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0 align-middle text-white">
                                    <span class="ms-1 d-none d-sm-inline">Clothing</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col py-3">
                    Products, Cart ...
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
