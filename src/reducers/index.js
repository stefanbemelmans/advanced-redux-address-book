import {combineReducers} from 'redux';
//setting defaults
function users(state = [], action){
  return state;

}

function searchText(state = "", action){
  
  return state;
    
  }
  
function currentUser(state = {}, action){
  if(action.type==="CHANGE_CURRENT_USER"){
    return action.value;
  }
  return state;
    
  }
  
const rootReducer = combineReducers({users, searchText, currentUser});
export default rootReducer;
