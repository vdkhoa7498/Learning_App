
export const SEARCH_ADD_HISTORY = "FORGET_PASSWORD_REQUEST";
export const SEARCH_DELETE_HISTORY = "FORGET_PASSWORD_SUCESSED";

  const inititalState = {
    
    history: ["abc", "123"]
  };
  
export  const searchReducer = (state = inititalState, action) => {
    switch (action.type) {
      case  SEARCH_ADD_HISTORY:
        return {
          ...state,
          history: state.history.push(action.keyword)
        };
      case SEARCH_DELETE_HISTORY:
        return {
          ...state,
          history: state.history.splice(action.index,1)
        };
      
      default:
        return state;
    }
  };
