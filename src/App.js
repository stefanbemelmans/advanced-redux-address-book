import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserDetail from './components/UserDetail';
import ListOfUsers from './components/ListOfUsers';
import SearchBox from "./components/SearchBox";

function App (props){
    return (
      <div>
        <SearchBox />
        <ListOfUsers />
        <UserDetail />
      </div>
    );
}

export default App;
