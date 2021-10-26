import * as ActionType from "./constants";
import api from "../../../../../utils/apiUtils";

export const actEditUser = (id) => {
  return (dispatch) => {
    dispatch(actEditUserRequest());
    api
      .get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP14&tuKhoa=${id}`)
      //success
      .then((result) => {
        dispatch(actEditUserSuccess(result.data.content));
      })

      //error
      .catch((error) => {
        dispatch(actEditUserFailed(error));
      });
  };
};

const actEditUserRequest = () => {
  return {
    type: ActionType.EDIT_USER_REQUEST,
  };
};

const actEditUserSuccess = (data) => {
  return {
    type: ActionType.EDIT_USER_SUCCESS,
    payload: data,
  };
};

const actEditUserFailed = (error) => {
  return {
    type: ActionType.EDIT_USER_FAILED,
    payload: error,
  };
};


export const actEditUploadUser = (user) => {
  return (dispatch) => {
    dispatch(actEditUploadUserRequest());
    api
      .post("QuanLyNguoiDung/CapNhatThongTinNguoiDung", user)
      //success
      .then((result) => {
        dispatch(actEditUploadUserSuccess(result.data.content));
      })

      //error
      .catch((error) => {
        dispatch(actEditUploadUserFailed(error));
      });
  };
};

const actEditUploadUserRequest = () => {
  return {
    type: ActionType.EDIT_UPLOAD_REQUEST,
  };
};

const actEditUploadUserSuccess = (data) => {
  return {
    type: ActionType.EDIT_UPLOAD_SUCCESS,
    payload: data,
  };
};

const actEditUploadUserFailed = (error) => {
  return {
    type: ActionType.EDIT_UPLOAD_FAILED,
    payload: error,
  };
};
