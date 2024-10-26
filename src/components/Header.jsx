import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Header() {
  return (
    <div>
      <header className="navigation">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="index.html">
            <img className="img-fluid" src="images/logo1.avif" width="105" margin-left="3%" alt="fashion" />
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse text-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-uppercase text-dark dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Home
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/Home1">
                    Homepage 1
                  </a>
                  <a className="dropdown-item" href="/Home">
                    Homepage 2
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase text-dark" href="/About">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-uppercase text-dark"
                  href="/Category"
                >
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-uppercase text-dark"
                  href="/Contact"
                >
                  Contact
                </a>
              </li>
            </ul>
            <form className="form-inline position-relative ml-lg-4">
              <input
                className="form-control px-0 w-100"
                type="search"
                placeholder="Search"
              />
              <a href="search.html" className="search-icon">
                <i className="ti-search text-dark" />
              </a>
            </form>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
