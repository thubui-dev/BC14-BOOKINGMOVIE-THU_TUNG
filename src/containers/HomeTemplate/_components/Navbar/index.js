import React from "react";
import "./header.css";

export default function Navbar() {
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
          <span className="navbar-toggler-icon"/>
					{/* <span className="header--label">Menu</span> */}
        </button>
        {/* <!-- Navbar links --> */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link header--nav-link" href="/">
                Trang chủ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link header--nav-link" href="/">
                Lịch chiếu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link header--nav-link" href="/">
                Ứng dụng
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link header--nav-link" href="/">
                Đăng nhập/ Đăng kí
              </a>
            </li>
          </ul>
        </div>
				</nav>
      </div>
    </div>
  );
}
