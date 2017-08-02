import React, { Component } from 'react';

function PhoneNumber (props){
  var num = props.number;
    return (
       <div>
        {num.substring(0,1)} 
        ({num.substring(1,4)}) 
        {num.substring(4,7)}-
        {num.substring(7,11)}
      </div>
    );
}

export default PhoneNumber;
