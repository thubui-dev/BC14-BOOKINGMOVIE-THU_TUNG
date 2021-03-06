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
import getUserReducer from "../../containers/AdminTemplate/DashboardPage/modules/reducer";
import addUserReducer from "../../containers/AdminTemplate/DashboardPage/AddUsers/modules/reducer";
import editUserReducer from "../../containers/AdminTemplate/DashboardPage/EditUser/modules/reducer";

import BookingMoveReducer from '../../containers/HomeTemplate/BookingTicket/Modules/reducer'
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
    BookingMoveReducer,
    getUserReducer,
    addUserReducer,
    editUserReducer,
});

export default rootReducer;