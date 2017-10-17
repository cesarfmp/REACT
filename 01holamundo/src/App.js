import React, { Component } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      users: [
        {id: 1, name: "miguel", email: "test@miguelgomez.io"},
        {id: 2, name: "test", email: "test@test.es"}
      ]
    };
  }
  
  anadirUsuario (event) {
    event.preventDefault();
    let usuario = {
      name: event.target.name.value,
      email: event.target.email.value
    };
    this.setState({
      users: this.state.users.concat([usuario])
    });
  }

  render() {
    return (
      <div>      
        <UserList users={this.state.users} />
        <UserForm onAddUser={this.anadirUsuario.bind(this)} />
      </div>
    );
  }
}

export default App;
