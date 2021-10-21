import { combineReducers } from "redux";
import listMovieReducer from "../../containers/HomeTemplate/ListMoviePage/modules/reducer";
import detailMovieReducer from "../../containers/HomeTemplate/DetailMoviePage/Modules/reducer";
import modalShowReducer from '../../containers/HomeTemplate/_components/Modal/Modules/reducer'

const rootReducer = combineReducers({
    listMovieReducer,
    detailMovieReducer,
    modalShowReducer
});

export default rootReducer;