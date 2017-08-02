import React, { Component } from 'react';

function NumberOfUsersCounter (props){
    return (
       <div>
        <h3>This is how many users there are: {props.numberOfUsers}</h3>
      </div>
    );
}

export default NumberOfUsersCounter;
