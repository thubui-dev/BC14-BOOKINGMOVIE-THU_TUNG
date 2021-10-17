import React from "react";
import "./header.css";
import ROUTES from "../../../../routes";
import { useSelector } from "react-redux";

export default function Navbar(props) {
  const loginData = useSelector((state) => state.loginReducer.data);
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
                <a className="nav-link header--nav-link" href="/">
                  Trang chủ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link header--nav-link" href="/">
                  Liên hệ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link header--nav-link" href="/">
                  Ứng dụng
                </a>
              </li>
              {loginData ? (
                <li className="nav-item">
                  <a className="nav-link header--nav-link" href="/">
                    {loginData?.hoTen}
                  </a>
                </li>
              ) : (
                <>
                  <li className="nav-item header--loginUser">
                    <a
                      className="nav-link header--nav-link"
                      href={ROUTES.login}
                    >
                      Đăng nhập
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link header--nav-link"
                      href={ROUTES.register}
                    >
                      Đăng kí
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
