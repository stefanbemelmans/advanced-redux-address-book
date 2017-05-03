export function chooseUser(user){
  return {
    type:"CHOOSE_USER",
    value:user
  }
}

export function setSearchText(text){
  return {
    type:"SET_SEARCH_TEXT",
    value:text
  }
}