import modalReducer from "./modalReducer";
import moviesReducer from "./moviesReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  modalReducer,
  moviesReducer,
});

export default allReducers;
