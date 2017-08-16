import {combineReducers} from 'redux';
//setting defaults

function users(state = [], action){
  return state;

}

function filterUser(state = "", action){
  if(action.type==="FILTER_USER"){
    return action.value;
  }
  return state;
    
  }
  
function currentUser(state = {}, action){
  if(action.type==="CHANGE_CURRENT_USER"){
    return action.value;
  }
  return state;
    
  }
  
const rootReducer = combineReducers({users, filterUser, currentUser});
export default rootReducer;
