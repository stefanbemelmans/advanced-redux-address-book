import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      userDivs = this.props.users.map((user,i) => {
        return <div key={i}>
            {user.firstName} - {user.lastName}
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
//naming convention
//has to be name of prop that component has
function mapStateToProps(state){
  return {
    users: state.users 
  }
}

const ListOfUsersContainer = connect(mapStateToProps)(ListOfUsers);
 export default ListOfUsersContainer;
