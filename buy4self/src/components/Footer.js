import React from "react";

const Footer = () => {
  return (
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top px-3 position-relative">
      <p class="col-md-4 mb-0 text-muted">© 2023 Buy4Self</p>

      <a
        href="/"
        class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none fs-4"
      >
        Buy4Self
      </a>

      <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item">
          <a href="/" class="nav-link px-2 text-muted">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a href="/products" class="nav-link px-2 text-muted">
            Products
          </a>
        </li>
        <li class="nav-item">
          <a href="/offers" class="nav-link px-2 text-muted">
            Offers
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-muted">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
