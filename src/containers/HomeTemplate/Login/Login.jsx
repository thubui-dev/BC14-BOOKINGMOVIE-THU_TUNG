import React, { useState } from "react";
import { actLoginApi } from "./modules/actions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../../component/Loader";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../routes";
import "./Login.css";

function LoginPage(props) {
  const [state, setState] = useState({ taiKhoan: "", matKhau: "" });
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loginReducer.loading);
  const error = useSelector((state) => state.loginReducer.error);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(actLoginApi(state, props.history));
  };

  if (loading) return <Loader />;

  const renderNoti = () => {
    return (
      error && (
        <div className="alert alert-danger ">
          {error?.response?.data?.content}
        </div>
      )
    );
  };

  return (
    <div className="loginPage">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h3 className="loginPage--title">ĐĂNG NHẬP</h3>
            {renderNoti()}
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control loginPage--item"
                  name="taiKhoan"
                  placeholder="Nhập vào Tài khoản"
                  onChange={handleOnChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="text"
                  className="form-control loginPage--item"
                  name="matKhau"
                  placeholder="Nhập vào Mật khẩu"
                  onChange={handleOnChange}
                />
              </div>
              <button type="submit" className="loginPage--button">
                Login
              </button>
              <div className="loginPage--register">
                Bạn chưa có tài khoản ?
                <NavLink to={ROUTES.register} className="cursor-pointer">
                  Đăng kí
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
