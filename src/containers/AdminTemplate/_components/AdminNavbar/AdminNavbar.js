import React from "react";
import "./adminNavbar.css";
import ROUTES from "../../../../routes";
// import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

export default function AdminNavbar(props) {
  return (
    <div className="header">
      <div className="header--navbar">
        {/* Brand */}
        <a className="navbar-brand" href="/">
          <img
            src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png"
            alt="CGV Cinemas"
          />
        </a>
        <nav className="navbar navbar-expand-md navbar-dark header--navbar-expand">
          {/* Toggler/collapsibe Button */}
          <button
            className="navbar-toggler header--button"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
            {/* <span className="header--label">Menu</span> */}
          </button>
          {/* <!-- Navbar links --> */}
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link header--nav-link"
                  to={ROUTES.dashboard}
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  activeClassName="active"
                  className="nav-link dropdown-toggle header--nav-link"
                  id="navbardrop"
                  data-toggle="dropdown"
                  to={`${ROUTES.dashboard}${ROUTES.films}`}
                >
                  Films
                </NavLink>
                <div className="dropdown-menu">
                  <NavLink
                    activeClassName="active"
                    className="nav-link dropdown-item header--nav-link"
                    id="navbardrop"
                    to={`${ROUTES.dashboard}${ROUTES.films}`}
                  >
                    Films
                  </NavLink>
                  <NavLink
                    activeClassName="active"
                    className="nav-link dropdown-item header--nav-link"
                    id="navbardrop"
                    to={`${ROUTES.dashboard}${ROUTES.addFilm}`}
                  >
                    Add Film
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
