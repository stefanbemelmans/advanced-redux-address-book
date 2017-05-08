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
      const filterUsers = this.props.users.filter((u) => {
        return u.first_name.indexOf(this.props.searchText) > -1;
      });
      userDivs = filterUsers.map((user) => {
        return <div>
            {user.first_name} - {user.last_name}
            <a href="#" onClick={
              (e)=>{
                e.preventDefault();
                this.props.setUser(user);
              }
            }> View </a>
        </div>
      });
    }else{
      buttonText = "Show";
      userDivs = "";
    }
    return (<div>

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
    users: state.users,
    searchText: state.searchText
  }
}

const ListOfUsersContainer = connect(mapStateToProps)(ListOfUsers);
export default ListOfUsersContainer