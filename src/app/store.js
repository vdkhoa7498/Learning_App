import { createStore } from 'redux'

function authToken(state = '', action) {
    switch (action.type) {
      case 'SET_TOKEN':
        return action.token;
      
      default:
        return state
    }
  }

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export const store = createStore(authToken)


