import {searchApi} from '../services/search-services'
import {
    SEARCH_SUCESSED,
    DELETE_HISTORY
} from '../reducer/authentication-reducer'

export const searchAction = (keyword, attribute, rule, category) => {
  function request() { 
    return { 
      type: LOGIN_REQUEST,
      message: "Đang đăng nhập"
  }}
  
  function success(token) { 
    return { 
      type: LOGIN_SUCESSED, 
      message: "Đăng nhập thành công" ,
      token: token
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
          dispatch(success(loginResponse.data.token));
        })
        .catch((err) => {
          // console.log("err", JSON.stringify(err.response.data.message));
          dispatch(failure(JSON.stringify(err.response.data.message)));
          
        });
    };
  
  };
