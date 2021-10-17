import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import api from "../../../utils/apiUtils";
import ROUTES from "../../../routes/index";
import Loader from "../../../component/Loader";
import "./Register.css";

function RegisterPage() {
  const loading = useSelector((state) => state.registerUserReducer.loading);
  const history = useHistory();
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    birthdaytime: "",
    email: "",
    soDt: "",
    maNhom: "GP14",
    maLoaiNguoiDung: "KhachHang",
  });

  const [formErrors, setFormErrors] = useState({
    taiKhoan: "",
    matKhau: "",
    birthdayTime: "",
    hoTen: "",
    email: "",
    soDt: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleErrors = (event) => {
    const { name, value } = event.target;

    let mess = value.trim() === "" ? " Không bỏ trống!" : "";

    switch (name) {
      case "taiKhoan":
        if (value && value.length <= 4) {
          mess = " Độ dài ký tự từ 5 trở lên";
        }
        break;

      case "matKhau":
        if (
          value &&
          !value.match(
            !/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{6,10}$/
          )
        ) {
          mess = " Độ dài ký tự từ 5 trở lên";
        }
        break;

      case "hoTen":
        if (value && !value.match(!/^[a-zA-Z ]{2,30}$/)) {
          mess = "Họ và tên không hợp lệ";
        }
        break;

      case "email":
        if (value && !value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
          mess = "Email không hợp lệ";
        }
        break;

      case "soDt":
        if (value && value.length <= 10) {
          mess = " SĐT phải ít nhất 10 số";
        }
        break;

      default:
        break;
    }

    setFormErrors({ ...formErrors, [name]: mess });
  };
  const handleRegisterUser = (event) => {
    event.preventDefault();

    api
      .post("QuanLyNguoiDung/DangKy", state)
      .then((result) => {
        toast("register success");
        history.push(ROUTES.login);
      })
      .catch((error) => {
        // dispatch(actRegisterUserFailed(error));
      });
  };

  console.log(formErrors);

  if (loading) return <Loader />;
  return (
    <div className="registerPage">
      <form className="container" onSubmit={handleRegisterUser}>
        <h3 className="registerPage--title">ĐĂNG KÍ</h3>
        <div className="form-group">
          <span>Họ và tên</span>
          <input
            className="form-control"
            name="hoTen"
            placeholder="Nhập vào họ và tên"
            onChange={handleOnChange}
            onBlur={handleErrors}
          />
          <span className="registerPage--error">{formErrors.hoTen}</span>
        </div>
        <div className="form-group">
          <span>Ngày sinh</span>
          <div className="input-group">
            <input
              type="datetime-local"
              id="birthdaytime"
              name="birthdayTime"
              onChange={handleOnChange}
              onBlur={handleErrors}
            />
            <span className="registerPage--error">{formErrors.birthdayTime}</span>
          </div>
        </div>

        <div className="form-group">
          <span>Email</span>
          <input
            className="form-control"
            name="email"
            placeholder="Nhập vào Email"
            onChange={handleOnChange}
            onBlur={handleErrors}
          />
          <span className="registerPage--error">{formErrors.email}</span>
        </div>
        <div className="form-group">
          <span>Tài khoản</span>
          <input
            className="form-control"
            name="taiKhoan"
            placeholder="Nhập vào tài khoản"
            onChange={handleOnChange}
            onBlur={handleErrors}
          />
          <span className="registerPage--error">{formErrors.taiKhoan}</span>
        </div>
        <div className="form-group">
          <span>Mật khẩu</span>
          <input
            className="form-control"
            name="matKhau"
            placeholder="Nhập vào mật khẩu"
            onChange={handleOnChange}
            onBlur={handleErrors}
          />
          <span className="registerPage--error">{formErrors.matKhau}</span>
        </div>
        <div className="form-group">
          <span>SĐT</span>
          <input
            className="form-control"
            name="soDt"
            placeholder="Nhập vào SĐT"
            onChange={handleOnChange}
            onBlur={handleErrors}
          />
          <span className="registerPage--error">{formErrors.soDt}</span>
        </div>
        <div className="form-group registerPage--btn">
          <button type="submit" className="registerPage--button">
            ĐĂNG KÍ
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
