import * as ActionType from "./constants";
import api from "../../../../../utils/apiUtils";

export const actAddUser = (user) => {
    console.log(user);
  return (dispatch) => {
    dispatch(actAddUserRequest());
    api
      .post("QuanLyNguoiDung/ThemNguoiDung", user)
      .then((result) => {
          console.log(result);
        dispatch(actAddUserSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actAddUserFailed(error));
      });
  };
};

export const actAddUserRequest = () => {
  return {
    type: ActionType.ADD_USER_REQUEST,
  };
};

export const actAddUserSuccess = (data) => {
  return {
    type: ActionType.ADD_USER_SUCCESS,
    payload: data,
  };
};

export const actAddUserFailed = (error) => {
  return {
    type: ActionType.ADD_USER_FAILED,
    payload: error,
  };
};
