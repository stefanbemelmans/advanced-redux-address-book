import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setCurrentUser} from "../actions"

class ListOfUsers extends Component {
  constructor(){
    super();
    this.state =  {visible:true};
  }
  render(){
    var buttonText = "Hide";
    var userDivs = "";
    if(this.state.visible){
      buttonText = "Hide";
      userDivs = this.props.users.map((user) => {
        return <div>
            {user.first_name} - {user.last_name}
            <a href="#" onClick={
              (e)=>{
                e.preventDefault();
                this.props.chooseUser(user);
              }
            }> View </a>
        </div>
      });
    }else{
      buttonText = "Show";
      userDivs = "";
    }
    return (<div>
            <input onChange={
              (e) => {
                  this.props.filterUsers(e.target.value)
              }
            } />
            <button onClick={()=>{
                this.setState({
                  visible:!this.state.visible
                });
              }
            }>
              {buttonText}
            </button>
            {userDivs}
          </div>)
  }
}
function mapStateToProps(state){
  return {
    users:state.users
  }
}
function mapDispatchToProps(dispatch){
  return {
    chooseUser:function(user){
      dispatch(setCurrentUser(user));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListOfUsers);
