import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

export default function Navbar() {
  const { mode } = useContext(AppContext);
  const [navCollapsed, isNavCollapsed] = useState(true);

  return (
    <nav
      className={`border-bottom navbar navbar-expand-lg fixed-top ${
        mode ? "bg-dark" : "bg-light"
      }`}
    >
      <div className="container-fluid">
        <Link
          className={`navbar-brand ${mode ? "text-light" : "text-dark"}`}
          to="/"
          onClick={() => {
            isNavCollapsed(true);
          }}
        >
          {"<" + "Nitish's Portfolio" + "/>"}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed ? true : false}
          onClick={() => {
            isNavCollapsed(!navCollapsed);
          }}
          aria-label="Toggle navigation"
          style={{ border: "none", transform: "rotate(90deg)" }}
        >
          <span
            className={`border border-${mode ? "light" : "dark"}`}
            style={{ width: "25px", margin: "3px" }}
          ></span>
          <span
            className={`border border-${mode ? "light" : "dark"}`}
            style={{ width: "25px", margin: "3px" }}
          ></span>
          <span
            className={`border border-${mode ? "light" : "dark"}`}
            style={{ width: "25px", margin: "3px" }}
          ></span>
        </button>
        <div
          className={`collapse navbar-collapse ${!navCollapsed ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link text-${mode ? "light" : "dark"}`}
                aria-current="page"
                to="/about"
                onClick={() => {
                  isNavCollapsed(true);
                }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-${mode ? "light" : "dark"}`}
                aria-current="page"
                to="/blogs"
                onClick={() => {
                  isNavCollapsed(true);
                }}
              >
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-${mode ? "light" : "dark"}`}
                aria-current="page"
                to="/portfolio"
                onClick={() => {
                  isNavCollapsed(true);
                }}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-${mode ? "light" : "dark"}`}
                aria-current="page"
                to="/resume"
                onClick={() => {
                  isNavCollapsed(true);
                }}
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
