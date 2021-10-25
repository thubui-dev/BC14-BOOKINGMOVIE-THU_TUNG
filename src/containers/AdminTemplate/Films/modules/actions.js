import * as ActionType from "./constants";
import api from "../../../../utils/apiUtils";

export const actFetchShowFilm = () => {
  return (dispatch) => {
    dispatch(actShowFilmRequest());
    api
      .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP14")
      .then((result) => {
        dispatch(actShowFilmSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actShowFilmFailed(error));
      });
  };
};

const actShowFilmRequest = () => {
  return {
    type: ActionType.SHOW_FILM_REQUEST,
  };
};

const actShowFilmSuccess = (data) => {
  return {
    type: ActionType.SHOW_FILM_SUCCESS,
    payload: data,
  };
};

const actShowFilmFailed = (error) => {
  return {
    type: ActionType.SHOW_FILM_FAILED,
    payload: error,
  };
};

export const actSearchFilm = (keyWord) => {
  return (dispatch) => {
    dispatch(actSearchFilmRequest());
    api
      .get(`QuanLyPhim/LayDanhSachPhim?maNhom=GP14&tenPhim=${keyWord}`)
      .then((result) => {
        dispatch(actSearchFilmSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actSearchFilmFailed(error));
      });
  };
};

const actSearchFilmRequest = () => {
  return {
    type: ActionType.SEARCH_FILM_REQUEST,
  };
};

const actSearchFilmSuccess = (data) => {
  return {
    type: ActionType.SEARCH_FILM_SUCCESS,
    payload: data,
  };
};

const actSearchFilmFailed = (error) => {
  return {
    type: ActionType.SEARCH_FILM_FAILED,
    payload: error,
  };
};

export const actDeleteFilm = (id) => {
  return (dispatch) => {
    dispatch(actDeleteRequest());
    api
      .delete(`QuanLyPhim/XoaPhim?MaPhim=${id}`)
      .then((result) => {
        dispatch(actDeleteSuccess(id));
        alert('Xóa phim thành công!')
        dispatch(actFetchShowFilm());
      })
      .catch((error) => {
        dispatch(actDeleteFailed(error));
      });
  };
};

const actDeleteRequest = () => {
  return {
    type: ActionType.DELETE_REQUEST,
  };
};

const actDeleteSuccess = (data) => {
  return {
    type: ActionType.DELETE_SUCCESS,
    payload: data,
  };
};

const actDeleteFailed = (error) => {
  return {
    type: ActionType.DELETE_FAILED,
    payload: error,
  };
};
