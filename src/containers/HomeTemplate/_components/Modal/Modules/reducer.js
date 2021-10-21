import * as ActionType from "./constants";

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const modalShowReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.MODAL_SHOWING_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };

        case ActionType.MODAL_SHOWING_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };

        case ActionType.MODAL_SHOWING_FAILED:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };

        default:
            return { ...state };
    }
}

export default modalShowReducer;