export const reducer = (preState, action){
    switch(action.type){
        case "LOGIN_SUCESSED":
            return {...preState, isAuthenticated: true, token: action.data.token, userInfo: action.data.userInfo}
        case "LOGIN_FAILED":
            return {...preState, isAuthenticated: false}
        case "REGISTER_SUCESSED":
            return {...preState, isAuthenticated: true, message: action.message}
        case "REGISTER_FAILED":
            return {...preState, isAuthenticated: false, message: action.message}
        default:
            throw new Error();
    }
}