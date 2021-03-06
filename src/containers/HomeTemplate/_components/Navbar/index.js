import React from "react";
import "./header.css";
import ROUTES from "../../../../routes";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { actLogout } from "../../Login/modules/actions";

export default function Navbar() {
  const loginData = useSelector((state) => state.loginReducer.data);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <div className="header--navbar">
        {/* Brand */}
        <a className="navbar-brand" href="/home">
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
                  to={ROUTES.home}
                >
                  Trang chủ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link header--nav-link"
                  to="/lienhe"
                >
                  Liên hệ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link header--nav-link"
                  to="/ungdung"
                >
                  Ứng dụng
                </NavLink>
              </li>
              {loginData ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="active"
                      className="nav-link header--nav-link"
                      to="/"
                    >
                      {loginData?.hoTen}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="active"
                      className="nav-link header--nav-link"
                      to={`${ROUTES.home}${ROUTES.login}`}
                      onClick={() => {
                        localStorage.removeItem("User");
                        dispatch(actLogout());
                      }}
                    >
                      Log Out
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item header--loginUser">
                    <NavLink
                      activeClassName="active"
                      className="nav-link header--nav-link"
                      to={`${ROUTES.home}${ROUTES.login}`}
                    >
                      Đăng nhập
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="active"
                      className="nav-link header--nav-link"
                      to={`${ROUTES.home}${ROUTES.register}`}
                    >
                      Đăng kí
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
      <div className="header-search d-flex justify-content-center align-items-center">
        <div className="header-search-left">
          <img alt="kênh Cine" src="https://www.cgv.vn/media/wysiwyg/2019/AUG/kenhcine.gif" />
        </div>
        <div className="header-search-right">
          <Link to='/movie-detail'>
            <img alt="" src="https://www.cgv.vn/media/wysiwyg/news-offers/mua-ve_ngay.png"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}
