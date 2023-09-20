import { createStore } from "redux";
import rootReducer from "./reducer/index";
// import projectReducer from "./reducer/projectReducer";



const store = createStore(rootReducer);
// const store = createStore(projectReducer);



export default store;