import checkLoginApp from "./auth";
import changePageTitle from "./counterNumer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changePageTitle,
    checkLoginApp,
    projectReducer
})

export default rootReducer;