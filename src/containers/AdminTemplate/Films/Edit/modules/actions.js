import * as ActionType from "./constants";
import api from "../../../../../utils/apiUtils";

export const actEditFilm = (id) => {
  return (dispatch) => {
    dispatch(actEditFilmRequest());
    api
      .get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
      //success
      .then((result) => {
        dispatch(actEditFilmSuccess(result.data.content));
      })

      //error
      .catch((error) => {
        dispatch(actEditFilmFailed(error));
      });
  };
};

const actEditFilmRequest = () => {
  return {
    type: ActionType.EDIT_FILM_REQUEST,
  };
};

const actEditFilmSuccess = (data) => {
  return {
    type: ActionType.EDIT_FILM_SUCCESS,
    payload: data,
  };
};

const actEditFilmFailed = (error) => {
  return {
    type: ActionType.EDIT_FILM_FAILED,
    payload: error,
  };
};


export const actEditUploadApi = (formData) => {
  return (dispatch) => {
    dispatch(actEditUploadApiRequest());
    api
      .post("QuanLyPhim/CapNhatPhimUpload",formData)
      //success
      .then((result) => {
        dispatch(actEditUploadApiSuccess(result.data.content));
        alert('Cập nhật film thành công!')
      })

      //error
      .catch((error) => {
        dispatch(actEditUploadApiFailed(error));
      });
  };
};

const actEditUploadApiRequest = () => {
  return {
    type: ActionType.EDIT_API_REQUEST,
  };
};

const actEditUploadApiSuccess = (data) => {
  return {
    type: ActionType.EDIT_API_SUCCESS,
    payload: data,
  };
};

const actEditUploadApiFailed = (error) => {
  return {
    type: ActionType.EDIT_API_FAILED,
    payload: error,
  };
};
