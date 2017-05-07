import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserDetailContainer from './containers/UserDetailContainer';
import ListOfUsersContainer from './containers/ListOfUsersContainer';
import SearchBox from "./components/SearchBox";

function App (props){
    return (
      <div>
        <SearchBox />
        <ListOfUsersContainer />
        <UserDetailContainer />
      </div>
    );
}

export default App;
