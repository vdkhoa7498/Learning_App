export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCESSED = "LOGIN_SUCESSED";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCESSED = "REGISTER_SUCESSED";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

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
          message: 'Đăng nhập thành công'
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
  
 