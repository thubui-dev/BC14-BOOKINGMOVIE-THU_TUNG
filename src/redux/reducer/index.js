import { combineReducers } from "redux";
import listMovieReducer from "../../containers/HomeTemplate/ListMoviePage/modules/reducer";
import detailMovieReducer from "../../containers/HomeTemplate/DetailMoviePage/Modules/reducer";
import loginReducer from "../../containers/HomeTemplate/Login/modules/reducer";
import registerUserReducer from "../../containers/HomeTemplate/Register/modules/reducer";

const rootReducer = combineReducers({
    listMovieReducer,
    detailMovieReducer,
    loginReducer,
    registerUserReducer
});

export default rootReducer;