import { combineReducers } from "redux";

import {loginReducer, registerReducer} from "./authentication-reducer";

const rootReducer = combineReducers({
  registerReducer,
  loginReducer,
});

export default rootReducer;
