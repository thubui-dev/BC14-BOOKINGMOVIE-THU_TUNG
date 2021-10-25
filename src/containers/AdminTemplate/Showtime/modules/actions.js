import * as ActionType from "./constants";
import api from "../../../../utils/apiUtils";


export const actShowTime = () => {
  return (dispatch) => {
    dispatch(actShowTimeRequest());
    api
      .get("QuanLyRap/LayThongTinHeThongRap")
      //success
      .then((result) => {
        dispatch(actShowTimeSuccess(result.data.content));
        console.log(result.data.content);
      })

      //error
      .catch((error) => {
        dispatch(actShowTimeFailed(error));
      });
  };
};

const actShowTimeRequest = () => {
  return {
    type: ActionType.SHOW_TIME_REQUEST,
  };
};

const actShowTimeSuccess = (data) => {
  return {
    type: ActionType.SHOW_TIME_SUCCESS,
    payload: data,
  };
};

const actShowTimeFailed = (error) => {
  return {
    type: ActionType.SHOW_TIME_FAILED,
    payload: error,
  };
};


export const actCumRap = (data) => {
  return (dispatch) => {
    dispatch(actCumRapRequest());
    api
      .get(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${data}`)
      //success
      .then((result) => {
        dispatch(actCumRapSuccess(result.data.content));
        console.log(result.data.content);
      })

      //error
      .catch((error) => {
        dispatch(actCumRapFailed(error));
      });
  };
};

const actCumRapRequest = () => {
  return {
    type: ActionType.CUMRAP_REQUEST,
  };
};

const actCumRapSuccess = (data) => {
  return {
    type: ActionType.CUMRAP_SUCCESS,
    payload: data,
  };
};

const actCumRapFailed = (error) => {
  return {
    type: ActionType.CUMRAP_FAILED,
    payload: error,
  };
};

export const actTaoLichChieu = (data) => {
  return (dispatch) => {
    dispatch(actTaoLichChieuRequest(data));
    console.log(data)
    api
      .post("QuanLyDatVe/TaoLichChieu", data)
      //success
      
      .then((result) => {
        dispatch(actTaoLichChieuSuccess(result.data.content));
        alert('Tạo lịch chiếu thành công!')
      })

      //error
      .catch((error) => {
        dispatch(actTaoLichChieuFailed(error));
      });
  };
};

const actTaoLichChieuRequest = () => {
  return {
    type: ActionType.LICHCHIEU_REQUEST,
  };
};

const actTaoLichChieuSuccess = (data) => {
  return {
    type: ActionType.LICHCHIEU_SUCCESS,
    payload: data,
  };
};

const actTaoLichChieuFailed = (error) => {
  return {
    type: ActionType.LICHCHIEU_FAILED,
    payload: error,
  };
};
