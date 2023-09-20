// reducers.js
import { SET_PROJECT_ARCHIVE } from "../actions/index";

const initialState = {
  ProjectArchive: [],
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECT_ARCHIVE:
      return { ...state, ProjectArchive: action.payload };
    default:
      return state;
  }
};

export default projectReducer;
