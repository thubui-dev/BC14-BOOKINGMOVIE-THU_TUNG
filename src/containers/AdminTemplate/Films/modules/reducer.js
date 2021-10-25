import * as ActionType from "./constants";

const initialState = {
  loading: false,
  error: null,
  data: [],
  keyword: "",
};

const showFilmReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SHOW_FILM_REQUEST:
      state.loading = true;
      state.data = [];
      state.error = null;
      return { ...state };

    case ActionType.SHOW_FILM_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.SHOW_FILM_FAILED:
      state.loading = false;
      state.data = [];
      state.error = action.payload;
      return { ...state };

    case ActionType.SEARCH_FILM_REQUEST:
      state.loading = true;
      state.data = [];
      state.error = null;
      return { ...state };

    case ActionType.SEARCH_FILM_SUCCESS:
      state.loading = true;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.SEARCH_FILM_FAILED:
      state.loading = true;
      state.data = [];
      state.error = action.payload;
      return { ...state };

    case ActionType.DELETE_SUCCESS: {
      return {
        ...state,
        data: state.data.filter((film) => film.maPhim !== action.payload),
      };
    }

    default:
      return { ...state };
  }
};

export default showFilmReducer;
