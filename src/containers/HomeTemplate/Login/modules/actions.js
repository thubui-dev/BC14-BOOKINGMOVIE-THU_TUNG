import * as ActionType from "./constants";
import api from "../../../../utils/apiUtils";

export const actLoginApi = (user, history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());

    api
      .post("QuanLyNguoiDung/DangNhap", user)
      .then((result) => {
        //check mã loại người dùng
        if (result.data.content.maLoaiNguoiDung === "KhachHang") {
          return Promise.reject({
            response: {
              data: {
                content: "Bạn không có quyền truy cập",
              },
            },
          });
        }

        //Lưu trạng thái login
        localStorage.setItem("User", JSON.stringify(result.data.content));

        //redirect dashboard
        history.replace("/booking-ticket");
        dispatch(actLoginSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actLoginFailed(error));
      });
  };
};

const actLoginRequest = () => {
  return {
    type: ActionType.LOGIN_REQUEST,
  };
};

const actLoginSuccess = (data) => {
  return {
    type: ActionType.LOGIN_SUCCESS,
    payload: data,
  };
};

const actLoginFailed = (error) => {
  return {
    type: ActionType.LOGIN_FAILED,
    payload: error,
  };
};
