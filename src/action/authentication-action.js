import {loginApi, registerApi} from '../services/authentication-services'
import {
    LOGIN_SUCESSED,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    REGISTER_SUCESSED,
    REGISTER_REQUEST,
    REGISTER_FAILURE
} from '../reducer/authentication-reducer'


export const loginAction = (email, password) => {
  function request() { 
    return { 
      type: LOGIN_REQUEST,
      message: "Đang đăng nhập"
  }}
  
  function success() { 
    return { 
      type: LOGIN_SUCESSED, 
      message: "Đăng nhập thành công" 
  }}
  
  function failure(message) { 
    return { 
      type: LOGIN_FAILURE, 
      message: message  
  }}

    return (dispatch) => {
      dispatch(request());
      loginApi(email, password)
        .then((loginResponse) => {
          console.log(JSON.stringify(loginResponse.data.token))
          dispatch(success());
        })
        .catch((err) => {
          // console.log("err", JSON.stringify(err.response.data.message));
          dispatch(failure(JSON.stringify(err.response.data.message)));
          
        });
    };
  
  };

  
  
  export const registerAction = (username, email, phone, password) => {

    function request() { 
      return { 
        type: REGISTER_REQUEST,
        // message: "Đang đăng nhập"
    }}
    
    function success(message) { 
      return { 
        type: REGISTER_SUCESSED, 
        message: message
    }}
    
    function failure(message) { 
      console.log(message)
      return { 
        type: REGISTER_FAILURE, 
        message: message  
    }}

    return (dispatch) => {
      dispatch(request());
      registerApi(username, email, phone, password)
        .then((registerResponse) => {
          console.log(registerResponse)
          dispatch(success("Đăng ký thành công"));
        })
        .catch((err) => {
          // console.log("error", JSON.stringify(err.response.data.message))
          dispatch(failure(JSON.stringify(err.response.data.message)));
          
        });
    };
  

  };
  