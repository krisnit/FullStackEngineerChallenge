import { combineReducers } from "redux";
import authReducer from "./authReducer";
import adminReducer from "./adminReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({ authReducer, adminReducer, userReducer });

export default rootReducer;
