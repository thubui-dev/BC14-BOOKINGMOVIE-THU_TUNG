import * as ActionType from "./constants";
import api from "./../../../../utils/apiUtils";

export const actFetchListMovie = () => {
  return (dispatch) => {
    dispatch(actListMovieRequest());
    api
      .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP14")
      //success
      .then((result) => {
        dispatch(actListMovieSuccess(result.data.content));
      })

      //error
      .catch((error) => {
        dispatch(actListMovieFailed(error));
      });
  };
};

const actListMovieRequest = () => {
  return {
    type: ActionType.LIST_MOVIE_REQUEST,
  };
};

const actListMovieSuccess = (data) => {
  return {
    type: ActionType.LIST_MOVIE_SUCCESS,
    payload: data,
  };
};

const actListMovieFailed = (error) => {
  return {
    type: ActionType.LIST_MOVIE_FAILED,
    payload: error,
  };
};
