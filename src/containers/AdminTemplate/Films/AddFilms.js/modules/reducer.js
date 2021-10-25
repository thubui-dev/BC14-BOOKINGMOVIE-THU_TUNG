import * as ActionType from "./constants";

const initialState = {
    loading: false,
    error: null,
    data: null,
}

const addFilmReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADD_FILM_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return {...state};
        
        case ActionType.ADD_FILM_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return {...state};

        case ActionType.ADD_FILM_FAILED:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return {...state};

        default:
            return {...state};
    }
};

export default addFilmReducer;