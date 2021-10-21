import * as ActionType from "./constants";

const initialState = {
    loading: false,
    data: null,
    showing: null,
    error: null,
};

const detailMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.DETAIL_MOVIE_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return {...state};

        case ActionType.DETAIL_MOVIE_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return {...state};

        case ActionType.DETAIL_MOVIE_FAILED:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return {...state};

        // case ActionType.DETAIL_SHOWING_REQUEST:
        //     state.loading = true;
        //     state.detail = null;
        //     state.error = null;
        //     return {...state};
    
        // case ActionType.DETAIL_SHOWING_SUCCESS:
        //     state.loading = false;
        //     state.detail = action.payload;
        //     state.error = null;
        //     return {...state};
    
        // case ActionType.DETAIL_SHOWING_FAILED:
        //     state.loading = false;
        //     state.detail = null;
        //     state.error = action.payload;
        //     return {...state};
            
        default:
            return {...state};
    }
}

export default detailMovieReducer;