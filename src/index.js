import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import './index.css';
import users from './users';
import store from './store';

var currentUser  = null;
// let filteredUsers = users;

// function filterUsers(name){
//   filteredUsers = users.filter(function(u){
//     return u.firstName === name;
//   });
//   render();
// }
function chooseUser(user){
  currentUser = user;
  render();
}

function render(){
  ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
  );
}
currentUser = users[0];
render();