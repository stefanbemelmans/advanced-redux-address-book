import {combineReducers} from 'redux';

function users(state=[],action){
  return state;
}
function currentUser(state={},action){
  if(action.type === "SET_CURRENT_USER"){
    return action.value;
  }
  return state;
}
function searchText(state="",action){
  return state;
}
function filteredUsers(state=[],action){
  return state;
}

const rootReducer = combineReducers({
 users,searchText,currentUser,filteredUsers
});
export default rootReducer;