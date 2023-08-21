import checkLoginApp from "./auth";
import changePageTitle from "./counterNumer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changePageTitle,
    checkLoginApp,
})

export default rootReducer;