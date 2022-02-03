import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    authStatus : loggedReducer
})

export default allReducers;
