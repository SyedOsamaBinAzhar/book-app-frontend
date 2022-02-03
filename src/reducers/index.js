import userReducer from "./user";
import { combineReducers } from "redux";
import authReducer from "./authReducer";

const allReducers = combineReducers({
    userDetails : userReducer,
    authState : authReducer,
})

export default allReducers;
