import { combineReducers } from "redux";

import {loginReducer, registerReducer, forgetPasswordReducer} from "./authentication-reducer";

const rootReducer = combineReducers({
  registerReducer,
  loginReducer,
  forgetPasswordReducer
});

export default rootReducer;
