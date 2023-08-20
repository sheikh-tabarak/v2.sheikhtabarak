import checkLoginApp from "./auth";
import changeNumber from "./counterNumer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeNumber,
    checkLoginApp,
    
})

export default rootReducer;