export function changeCurrentUser(user){
  return {
    type:"CHANGE_CURRENT_USER",
    value:user
  }
}

export function filterUser(user){
  return {
    type:"FILTER_USER",
    value:user
  }
}
