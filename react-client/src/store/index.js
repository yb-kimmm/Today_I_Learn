import { combineReducers } from "redux";
import modal from "./modal";
import user from "./user";

const rootReducer = combineReducers({
  user,
  modal,
});

export default rootReducer;
