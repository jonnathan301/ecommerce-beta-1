import React, { Component } from 'react';
import './App.css';
import AppService from './services/AppService';

class App extends Component {
  state = {
    username : "",
    password : ""
  };

  service = new AppService();

  register = (event) => {
    event.preventDefault();
    this.service.createUser(this.state);
  }

  onChangeInput = (event) => {
    let prop = event.target.name;
    let value = event.target.value;
    let user = this.state;
    user[prop] = value;
    this.setState(user);   
  }

  render() {
    return (
      <div className="App">
        <h1 >E-Commerce</h1>
        <h1 >beta</h1>
        <form onSubmit={this.register} >
          <input name="username" type="text" placeholder="Username" onChange={this.onChangeInput} />
          <br/>
          <input name="password" type="password" placeholder="Password" onChange={this.onChangeInput}/> 
          <br/>
          <button type="submit">Registrar</button>
        </form>
      </div>
    );
  }
  
}

export default App;