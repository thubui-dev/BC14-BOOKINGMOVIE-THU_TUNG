import * as ActionType from "./constants";
import api from "../../../../utils/apiUtils";

export const actGetUser = () => {
  return (dispatch) => {
    dispatch(actGetUserRequest());
    api
      .get("QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP14")
      .then((result) => {
        dispatch(actGetUserSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actGetUserFailed(error));
      });
  };
};

const actGetUserRequest = () => {
  return {
    type: ActionType.GET_USER_REQUEST,
  };
};

const actGetUserSuccess = (data) => {
  return {
    type: ActionType.GET_USER_SUCCESS,
    payload: data,
  };
};

const actGetUserFailed = (error) => {
  return {
    type: ActionType.GET_USER_FAILED,
    payload: error,
  };
};

export const actSearchUser = (keyWord) => {
  return (dispatch) => {
    dispatch(actSearchUserRequest());
    api
      .get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP14&tuKhoa=${keyWord}`)
      .then((result) => {
        dispatch(actSearchUserSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actSearchUserFailed(error));
      });
  };
};

const actSearchUserRequest = () => {
  return {
    type: ActionType.SEARCH_USER_REQUEST,
  };
};

const actSearchUserSuccess = (data) => {
  return {
    type: ActionType.SEARCH_USER_SUCCESS,
    payload: data,
  };
};

const actSearchUserFailed = (error) => {
  return {
    type: ActionType.SEARCH_USER_FAILED,
    payload: error,
  };
};

export const actDeleteUser = (id) => {
  return (dispatch) => {
    dispatch(actDeleteUserRequest());
    api
      .delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`)
      .then((result) => {
        dispatch(actDeleteUserSuccess(id));
        alert('Xóa người dùng thành công!')
        dispatch(actGetUser());
      })
      .catch((error) => {
        dispatch(actDeleteUserFailed(error));
      });
  };
};

const actDeleteUserRequest = () => {
  return {
    type: ActionType.DELETE_USER_REQUEST,
  };
};

const actDeleteUserSuccess = (data) => {
  return {
    type: ActionType.DELETE_USER_SUCCESS,
    payload: data,
  };
};

const actDeleteUserFailed = (error) => {
  return {
    type: ActionType.DELETE_USER_FAILED,
    payload: error,
  };
};
