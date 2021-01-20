import {forgetPasswordApi, loginApi, registerApi} from '../services/authentication-services'
import * as SecureStore from 'expo-secure-store';
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

export const loginAction = (email, password) => {

  const setToken = async (token) => {
    try {
      await SecureStore.setItemAsync(
        'token',
        token
      );
    } catch (e) {
      console.log(e);
    }
  };


  function request() { 
    return { 
      type: LOGIN_REQUEST,
      message: "Đang đăng nhập"
  }}
  
  function success(message) { 
    return { 
      type: LOGIN_SUCESSED, 
      message: message
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
          // console.log(JSON.stringify(loginResponse.data.token))
          
          setToken(loginResponse.data.token);
          dispatch(success('Đăng nhập thành công'));
        })
        .catch((err) => {
          // console.log("err", JSON.stringify(err));
          dispatch(failure(err.response.data.message));
          
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
          dispatch(failure(err.response.data.message));
          
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
          // console.log("error", Promise.reject(err))
          dispatch(failure(Promise.reject(err.response.data.message)));
          
        });
    };
  

  };