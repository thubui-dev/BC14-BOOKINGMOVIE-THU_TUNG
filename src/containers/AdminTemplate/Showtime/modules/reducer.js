import * as ActionType from "./constants";

const initialState = {
    loading: false,
    error: null,
    heThongRap: null,
    cumRap: null,
}

const showTimeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SHOW_TIME_REQUEST:
            state.loading = true;
            state.heThongRap = null;
            state.error = null;
            return {...state};
        
        case ActionType.SHOW_TIME_SUCCESS:
            state.loading = false;
            state.heThongRap = action.payload;
            state.error = null;
            return {...state};

        case ActionType.SHOW_TIME_FAILED:
            state.loading = false;
            state.heThongRap = null;
            state.error = action.payload;
            return {...state};

        case ActionType.CUMRAP_REQUEST:
            state.loading = true;
            state.cumRap = null;
            state.error = null;
            return {...state};
            
        case ActionType.CUMRAP_SUCCESS:
            state.loading = false;
            state.cumRap = action.payload;
            state.error = null;
            return {...state};
    
        case ActionType.CUMRAP_FAILED:
            state.loading = false;
            state.cumRap = null;
            state.error = action.payload;
            return {...state};

        default:
            return {...state};
    }
};

export default showTimeReducer;