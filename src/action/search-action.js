import {searchApi} from '../services/search-services'
import {
    SEARCH_ADD_HISTORY,
    SEARCH_DELETE_HISTORY
} from '../reducer/search-reducer'

export const addHistoryAction = (keyword) => {
  function addHistory() { 
    return { 
      type: SEARCH_ADD_HISTORY,
      keyword: keyword
  }}
  
      return (dispatch) => {
      dispatch(addHistory(keyword));
      
    };
  
  };

  export const deleteHistoryAction = (index) => {
        
    function deleteHistory(index) { 
      return { 
        type: SEARCH_DELETE_HISTORY, 
        index: index
    }}
        return (dispatch) => {
        dispatch(deleteHistory(index));
      
      };
    
    };