import {apiLogin} from '../core/services/authentication-services'
import {
    LOGIN_SUCESSED,
    LOGIN_FAILED,
    LOGIN_REQUEST,
    REGISTER_FAILED,
    REGISTER_SUCESSED
} from '../reducer/authentication-reducer'

export const login = (dispatch) => (email, password) =>{
    dispatch({type: LOGIN_REQUEST})
    apiLogin(email,password).then((response) =>{
        if (response.status == 200){
            dispatch({type: LOGIN_SUCESSED, data: response.data})
        } else{
            dispatch({type: LOGIN_FAILED, message: response.data})
        }
    }). catch((error) =>{
        dispatch({type: LOGIN_FAILED})
    })
}

export const register = (dispatch) => (username, email, phone, password) =>{
    axios.post('http://api.dev.letstudy.org/user/login',{
        username: username,
        email: email,
        phone: phone,
        password: password
    }).then((response) =>{
        if (response.status == 200){
            dispatch({type: REGISTER_SUCESSED, message: response.data})
        } else{
            dispatch({type: REGISTER_FAILED, message: response.data})
        }
    }). catch((error) =>{
        dispatch({type: REGISTER_FAILED})
    })
}