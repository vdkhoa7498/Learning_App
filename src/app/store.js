import { createStore } from 'redux'

function authToken(state = '', action) {
    switch (action.type) {
      case 'SET_TOKEN':
        return action.token;
      
      default:
        return state
    }
}

function userInfo(state = {}, action) {
  switch (action.type) {
    case 'SET_INFO':
      return action.info;
    
    default:
      return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export const tokenStore = createStore(authToken)
export const userInfoStore = createStore(userInfo)


