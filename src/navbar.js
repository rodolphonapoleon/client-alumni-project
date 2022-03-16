import React from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "HOME",
    path: "/",
    description: "",
  },
  {
    name: "REGISTER",
    path: "addUser",
    description: "",
  },
  {
    name: "ALL STUDENTS",
    path: "allUsers",
    description: "",
  },
];

function NavBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark py-2"
        style={{ backgroundColor: "black" }}
      >
        <div className="container-fluid ms-5">
          <NavLink to="/" className="navbar-brand fs-1 fw-bold">
            AlexKates<span className="text-primary">Alumni</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end me-5"
            id="navbarNav"
          >
            <div className="navbar-nav">
              {menuItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link fs-5 ms-3 active"
                      : "nav-link fs-5 ms-3"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
