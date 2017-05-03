import React from 'react';
import {setSearchText} from "../actions";
import {connect} from "react-redux";

function SearchBox (props){
    return (
     <input onChange={
        (e) => {
            props.setSearchText(e.target.value)
        }
      } />
    );
}

function mapDispatchToProps(dispatch){
  return {
    setSearchText:function(txt){
      dispatch(setSearchText(txt));
    }
  }
}
export default connect(null,mapDispatchToProps)(SearchBox);

