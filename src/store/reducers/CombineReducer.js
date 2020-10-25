import ProjectReducer from "./ProjectReducer";
import AuthReducer from "./AuthReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from 'redux-firestore'


const rootReducer = combineReducers ({
  project: ProjectReducer,
  auth: AuthReducer,
  firestore: firestoreReducer
});

export default rootReducer;
