import * as ActionType from "./constants";

const initialState = {
  loading: false,
  error: null,
  data: [],
  keyword: "",
};

const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_USER_REQUEST:
      state.loading = true;
      state.data = [];
      state.error = null;
      return { ...state };

    case ActionType.GET_USER_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.GET_USER_FAILED:
      state.loading = false;
      state.data = [];
      state.error = action.payload;
      return { ...state };

    case ActionType.SEARCH_USER_REQUEST:
      state.loading = true;
      state.data = [];
      state.error = null;
      return { ...state };

    case ActionType.SEARCH_USER_SUCCESS:
      state.loading = true;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.SEARCH_USER_FAILED:
      state.loading = true;
      state.data = [];
      state.error = action.payload;
      return { ...state };

    case ActionType.DELETE_USER_SUCCESS: {
      return {
        ...state,
        data: state.data.filter((user) => user.taiKhoan !== action.payload),
      };
    }

    default:
      return { ...state };
  }
};

export default getUserReducer;
