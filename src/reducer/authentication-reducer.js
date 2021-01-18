export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCESSED = "LOGIN_SUCESSED";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCESSED = "REGISTER_SUCESSED";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const FORGET_PASSWORD_REQUEST = "FORGET_PASSWORD_REQUEST";
export const FORGET_PASSWORD_SUCESSED = "FORGET_PASSWORD_SUCESSED";
export const FORGET_PASSWORD_FAILURE = "FORGET_PASSWORD_FAILURE";

  const inititalState = {
    isLoading: false,
    message: ''
  };
  
export  const loginReducer = (state = inititalState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case LOGIN_SUCESSED:
        return {
          ...state,
          isLoading: false,
          message: action.message
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          isLoading: false,
          message: action.message
        };
      default:
        return state;
    }
  };

export  const registerReducer = (state = inititalState, action) => {
    switch (action.type) {
      case REGISTER_REQUEST:
        return {
          ...state,
          isLoading: true,
          message: action.message
        };
      case REGISTER_SUCESSED:
        return {
          ...state,
          isLoading: false,
          message: action.message
        };
      case REGISTER_FAILURE:
        return {
          ...state,
          isLoading: false,
          message: action.message
        };
      default:
        return state;
    }
  };
  
  export  const forgetPasswordReducer = (state = inititalState, action) => {
    switch (action.type) {
      case FORGET_PASSWORD_REQUEST:
        return {
          ...state,
          isLoading: true,
          message: action.message
        };
      case FORGET_PASSWORD_SUCESSED:
        return {
          ...state,
          isLoading: false,
          message: action.message
        };
      case FORGET_PASSWORD_FAILURE:
        return {
          ...state,
          isLoading: false,
          message: action.message
        };
      default:
        return state;
    }
  }; 