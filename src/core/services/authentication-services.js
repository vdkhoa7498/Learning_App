import axios from 'axios'

export const apiLogin = (email, password) =>{
    axios.post('http://api.dev.letstudy.org/user/login',{
        email: email,
        password: password
    })
}