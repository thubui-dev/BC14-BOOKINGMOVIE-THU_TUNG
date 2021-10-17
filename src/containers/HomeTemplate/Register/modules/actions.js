import * as ActionType from "./constants";
import api from "../../../../utils/apiUtils";

export const actRegisterUser = (user) => {
  return (dispatch) => {
    dispatch(actRegisterUserRequest());
    api
      .post("QuanLyNguoiDung/DangKy", user)
      .then((result) => {
        dispatch(actRegisterUserSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actRegisterUserFailed(error));
      });
  };
};

export const actRegisterUserRequest = () => {
  return {
    type: ActionType.REGISTER_USER_REQUEST,
  };
};

export const actRegisterUserSuccess = (data) => {
  return {
    type: ActionType.REGISTER_USER_SUCCESS,
    payload: data,
  };
};

export const actRegisterUserFailed = (error) => {
  return {
    type: ActionType.REGISTER_USER_FAILED,
    payload: error,
  };
};
