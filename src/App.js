import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  
  state = {
    username: 'fred'
  }

  inputHandler = (event) => {
    const newState = {
      username: event.target.value
    }
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <UserInput username={this.state.username} change={this.inputHandler} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
