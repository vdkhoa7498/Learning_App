export const loginServices = (username_, password_) =>{
    if (username_ === 'admin'){
        if (password_ === '123456'){
            return {status:200, info: {username: username_, token: 'abc', fullname: 'Administrator'}}
        } else{
            return {status: 404, errorString: 'Username & Password are not match'}
        }
    }
    return {status: 404, errorString: 'Username is not existed'}
}