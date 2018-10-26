import React, { Component } from 'react';
import './App.css';
import InputValidator from './InputValidator/InputValidator';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state =  {
    username: 'Hana',
    freeText: '',
    count: 0
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //    username: 'Hana',
  //    freeText: '',
  //    inputLength: 0
  //   }

  //   this.inputChangedHandler = this.inputChangedHandler.bind(this);
  // }

  // use this syntax for this to refer to the class
  userInputChangedHandler = (event) =>
  {
    this.setState({username: event.target.value});
  }


  setCountHandler = (event) =>
  {
    this.setState({freeText: event.target.value}, {count: this.state.freeText.length});
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.setCountHandler} />
        <p>{this.state.count}</p>
        <InputValidator counter={this.state.inputLength} />
        <UserInput value={this.state.username} changed={this.userInputChangedHandler} />
        <UserOutput username={this.state.username}/>
        <UserOutput username='Julia'/>
      </div>
    );
  }
}

export default App;
