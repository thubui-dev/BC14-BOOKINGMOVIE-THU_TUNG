import * as ActionType from "./constants";
import api from "../../../../utils/apiUtils";
import ROUTES from "../../../../routes";

export const actLoginApi = (user, history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());

    api
      .post("QuanLyNguoiDung/DangNhap", user)
      .then((result) => {
        // //check mã loại người dùng
        // if (result.data.content.maLoaiNguoiDung === "KhachHang") {
        //   return Promise.reject({
        //     response: {
        //       data: {
        //         content: "Bạn không có quyền truy cập",
        //       },
        //     },
        //   });
        // }

        switch (result.data.content.maLoaiNguoiDung) {
          case "KhachHang":
            history.replace(`${ROUTES.home}${ROUTES.bookingTicket}`);
            dispatch(actLoginSuccess(result.data.content));
            break;

          case "QuanTri":
            history.replace(ROUTES.dashboard);
            dispatch(actLoginSuccess(result.data.content));
            break;

          default:
            Promise.reject({
              response: {
                data: {
                  content: "Bạn không có quyền truy cập",
                },
              },
            });
        }

        //Lưu trạng thái login
        localStorage.setItem("User", JSON.stringify(result.data.content));
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

export const actLogout = () => {
  return {
    type: ActionType.LOGOUT,
  };
};
