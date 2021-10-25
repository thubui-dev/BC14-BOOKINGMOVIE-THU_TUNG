import * as ActionType from "./constants";
import api from "./../../../../utils/apiUtils";

export const actFetchDetailMovie = (id) => {
  return (dispatch) => {
    
    dispatch(actDetailMovieRequest());
    api
      .get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
      .then((result) => {
        dispatch(actDetailMovieSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actDetailMovieFailed(error));
      });
  };
};

const actDetailMovieRequest = () => {
  return {
    type: ActionType.DETAIL_MOVIE_REQUEST,
  };
};

const actDetailMovieSuccess = (data) => {
  return {
    type: ActionType.DETAIL_MOVIE_SUCCESS,
    payload: data,
  };
};

const actDetailMovieFailed = (error) => {
  return {
    type: ActionType.DETAIL_MOVIE_FAILED,
    payload: error,
  };
};

// export const actFetchShowingMovie = (id) => {
//   return (dispatch) => {

//     dispatch(actDetailShowingRequest());
//     api
//       .get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
//       .then((result) => {
//         dispatch(actDetailShowingSuccess(result.data.content));
//       })
//       .catch((error) => {
//         dispatch(actDetailShowingFailed(error));
//       });
//   };
// };

// const actDetailShowingRequest = () => {
//   return {
//     type: ActionType.DETAIL_SHOWING_REQUEST,
//   };
// };

// const actDetailShowingSuccess = (data) => {
//   return {
//     type: ActionType.DETAIL_SHOWING_SUCCESS,
//     payload: data,
//   };
// };

// const actDetailShowingFailed = (error) => {
//   return {
//     type: ActionType.DETAIL_SHOWING_FAILED,
//     payload: error,
//   };
// };
