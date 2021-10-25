import * as ActionType from './contants'

const initialState = {
    loading: false,
    listTicketRoom: [],
    listSeatCurrentlySelected: [],
    listSeatOtherSelected: [],
    bookingSuccess: false,
    error: null,
};

const BookingMoveReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADD_SEAT_SELECTED:
            const seatTemp = state.listSeatCurrentlySelected;
            const index = seatTemp.findIndex(
                (seatCurrent) => seatCurrent.maGhe === action.payload
            );
            if (index !== -1) {
                seatTemp.splice(index, 1);
            } else {
                seatTemp.push(action.payload);
            }
            console.log(state.listSeatCurrentlySelected)
            state.listSeatCurrentlySelected = seatTemp;
            return { ...state };

        case ActionType.SEND_REQUEST:
            state.loading = true;
            state.listTicketRoom = [];
            state.listSeatCurrentlySelected = [];
            state.listSeatOtherSelected = [];
            state.error = null;
            return { ...state };

        case ActionType.SET_STATUS_BOOKING:
            state.bookingSuccess = action.payload;
            return { ...state };

        case ActionType.GET_DATA_SUCCESS:
            state.loading = false;
            state.listTicketRoom = action.payload;
            state.listSeatCurrentlySelected = [];
            state.listSeatOtherSelected = [];
            state.error = null;
            return { ...state };

        case ActionType.GET_DATA_FAIL:
            state.loading = false;
            state.listTicketRoom = [];
            state.listSeatCurrentlySelected = [];
            state.listSeatOtherSelected = [];
            state.bookingSuccess = false;
            state.error = action.payload;
            return { ...state };

        default:
            return state;
    }
}

export default BookingMoveReducer