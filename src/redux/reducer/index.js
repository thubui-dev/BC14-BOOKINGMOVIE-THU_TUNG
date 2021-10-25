import { combineReducers } from "redux";
import listMovieReducer from "../../containers/HomeTemplate/ListMoviePage/modules/reducer";
import detailMovieReducer from "../../containers/HomeTemplate/DetailMoviePage/Modules/reducer";
import modalShowReducer from '../../containers/HomeTemplate/_components/Modal/Modules/reducer'
import loginReducer from "../../containers/HomeTemplate/Login/modules/reducer";
import registerUserReducer from "../../containers/HomeTemplate/Register/modules/reducer";
import showFilmReducer from "../../containers/AdminTemplate/Films/modules/reducer";
import addFilmReducer from "../../containers/AdminTemplate/Films/AddFilms.js/modules/reducer";
import editFilmReducer from "../../containers/AdminTemplate/Films/Edit/modules/reducer";
import showTimeReducer from "../../containers/AdminTemplate/Showtime/modules/reducer";


const rootReducer = combineReducers({
    listMovieReducer,
    detailMovieReducer,
    modalShowReducer,
    loginReducer,
    registerUserReducer,
    showFilmReducer,
    addFilmReducer,
    editFilmReducer,
    showTimeReducer,
});

export default rootReducer;