import React from "react";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../../routes";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      {/* Brand */}
      <a className="navbar-brand" href="/">
        Navbar
      </a>
      {/* Toggler/collapsibe Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon" />
      </button>
      {/* Navbar links */}
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact activeClassName="active" className="nav-link" to={ROUTES.home}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={ROUTES.login}>
              Log in Page
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to={ROUTES.movieList}
            >
              List Movie Page
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to={ROUTES.movieDetail}
            >
              Detail Movie Page
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
