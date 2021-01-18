import {forgetPasswordApi, loginApi, registerApi} from '../services/authentication-services'
import {
    LOGIN_SUCESSED,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    REGISTER_SUCESSED,
    REGISTER_REQUEST,
    REGISTER_FAILURE,
    FORGET_PASSWORD_REQUEST,
    FORGET_PASSWORD_SUCESSED,
    FORGET_PASSWORD_FAILURE
} from '../reducer/authentication-reducer'

import {tokenStore} from '../app/store'

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
          tokenStore.dispatch({ type: 'SET_TOKEN', token: JSON.stringify(loginResponse.data.token) })
          // console.log(JSON.stringify(loginResponse.data.token))
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
  

  export const forgetPasswordAction = (email) => {

    function request() { 
      return { 
        type: FORGET_PASSWORD_REQUEST,
        
    }}
    
    function success(message) { 
      return { 
        type: FORGET_PASSWORD_SUCESSED, 
        message: message
    }}
    
    function failure(message) { 
      console.log(message)
      return { 
        type: FORGET_PASSWORD_FAILURE, 
        message: message  
    }}

    return (dispatch) => {
      dispatch(request());
      forgetPasswordApi(email)
        .then((registerResponse) => {
          // console.log(registerResponse)
          dispatch(success("Email reset mật khẩu đã gửi đi! Vui lòng kiểm tra email..."));
        })
        .catch((err) => {
          // console.log("error", JSON.stringify(err.response.data.message))
          dispatch(failure(err.response.data.message));
          
        });
    };
  

  };