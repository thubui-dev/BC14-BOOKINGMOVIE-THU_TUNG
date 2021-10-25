import { combineReducers } from "redux";
import listMovieReducer from "../../containers/HomeTemplate/ListMoviePage/modules/reducer";
import detailMovieReducer from "../../containers/HomeTemplate/DetailMoviePage/Modules/reducer";
import modalShowReducer from '../../containers/HomeTemplate/_components/Modal/Modules/reducer'
import loginReducer from "../../containers/HomeTemplate/Login/modules/reducer";
import registerUserReducer from "../../containers/HomeTemplate/Register/modules/reducer";
import BookingMoveReducer from '../../containers/HomeTemplate/BookingTicket/Modules/reducer'
const rootReducer = combineReducers({
    listMovieReducer,
    detailMovieReducer,
    modalShowReducer,
    BookingMoveReducer,
    loginReducer,
    registerUserReducer
});

export default rootReducer;