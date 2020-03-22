import { combineReducers } from "redux";
import counterReducer from "./reducer-counter";
import userReducer from "./reducer-user";

const rootReducer = combineReducers({
    userState: userReducer,
    counterState: counterReducer
});

export default rootReducer;