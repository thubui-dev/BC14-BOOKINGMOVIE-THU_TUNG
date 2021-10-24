import * as ActionType from "./constants";
import api from "./../../../../../utils/apiUtils";

export const actFetchShowingMovie = (id) => {
  return (dispatch) => {
    dispatch(actModalShowingRequest());
    api
      .get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
      .then((result) => {
        dispatch(actModalShowingSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actModalShowingFailed(error));
      });
  };
};

const actModalShowingRequest = () => {
  return {
    type: ActionType.MODAL_SHOWING_REQUEST,
  };
};

const actModalShowingSuccess = (data) => {
  return {
    type: ActionType.MODAL_SHOWING_SUCCESS,
    payload: data,
  };
};

const actModalShowingFailed = (error) => {
  return {
    type: ActionType.MODAL_SHOWING_FAILED,
    payload: error,
  };
};
