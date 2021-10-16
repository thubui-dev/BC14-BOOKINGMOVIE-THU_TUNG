import { combineReducers } from "redux";
import listMovieReducer from "../../containers/HomeTemplate/ListMoviePage/modules/reducer";
import detailMovieReducer from "../../containers/HomeTemplate/DetailMoviePage/Modules/reducer";

const rootReducer = combineReducers({
    listMovieReducer,
    detailMovieReducer,
});

export default rootReducer;