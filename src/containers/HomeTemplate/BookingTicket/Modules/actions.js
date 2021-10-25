import * as ActionType from './contants'
import api from "../../../../utils/apiUtils"

export const actFetchBookingMovie = (id) => {
    return (dispatch) => {
        dispatch(actTickReques())
        api
            .get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
            .then((result) => {
                dispatch(actGetDataSuccess(result.data.content))
            })
            .catch((error) => {
                dispatch(actGetDataFailAction(error))
            })
    }
}

export const addSeatSelectedAction = (ghe) => {
    return {
        type: ActionType.ADD_SEAT_SELECTED,
        payload: ghe
    }
}
export const actTickReques = () => {
    return {
        type: ActionType.SEND_REQUEST
    };
};
export const actGetDataSuccess = (data) => {
    return {
        type: ActionType.GET_DATA_SUCCESS,
        payload: data,
    };
};
export const actGetDataFailAction = (error) => {
    return {
        type: ActionType.GET_DATA_FAIL,
        payload: error
    };
};
export const actStatusBooking = (value) => {
    return {
        type: ActionType.SET_STATUS_BOOKING,
        payload: value,
    };
};

export const actBookTickets = (infoTiket) => {
    return (dispatch) => {
        api
            .post(`QuanLyDatVe/DatVe`, infoTiket)
            .then((result) => {
                dispatch(actFetchBookingMovie(infoTiket.maLichChieu))
                dispatch(actStatusBooking(true))
            })
            .catch((error) => {
                console.log(error.response.data)
                dispatch(actGetDataFailAction(error))
            })
    }

}
