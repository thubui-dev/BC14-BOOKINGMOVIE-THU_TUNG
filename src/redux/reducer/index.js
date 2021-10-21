import { combineReducers } from "redux";
import listMovieReducer from "../../containers/HomeTemplate/ListMoviePage/modules/reducer";
import detailMovieReducer from "../../containers/HomeTemplate/DetailMoviePage/Modules/reducer";
<<<<<<< HEAD
import modalShowReducer from '../../containers/HomeTemplate/_components/Modal/Modules/reducer'
=======
import loginReducer from "../../containers/HomeTemplate/Login/modules/reducer";
import registerUserReducer from "../../containers/HomeTemplate/Register/modules/reducer";
>>>>>>> master

const rootReducer = combineReducers({
    listMovieReducer,
    detailMovieReducer,
<<<<<<< HEAD
    modalShowReducer
=======
    loginReducer,
    registerUserReducer
>>>>>>> master
});

export default rootReducer;