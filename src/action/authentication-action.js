import axios from "axios"

export const login = (dispatch) => (email, password) =>{
    axios.post('http://api.dev.letstudy.org/user/login',{
        email: email,
        password: password
    }).then((response) =>{
        if (response.status == 200){
            dispatch({type: "LOGIN_SUCESSED", data: response.data})
        } else{
            dispatch({type: "LOGIN_FAILED", message: response.data})
        }
    }). catch((error) =>{
        dispatch({type: "LOGIN_FAILED"})
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
            dispatch({type: "LOGIN_SUCESSED", message: response.data})
        } else{
            dispatch({type: "LOGIN_FAILED", message: response.data})
        }
    }). catch((error) =>{
        dispatch({type: "LOGIN_FAILED"})
    })
}