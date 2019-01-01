import React, { Component } from 'react';
import './App.css';
import Result from './Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { shouldShow: false };
  }
  render() {
    return (
      <div className="App">
        <button id="submit" onClick={this.handleClick}>Get Number</button>
        <Result shouldShow={this.state.shouldShow} ></Result>
      </div>
    );
  }

  handleClick = () => {
    fetch('http://localhost:3001/number').then(() => {
      this.setState({shouldShow: true});
    })
    // fetch('http://localhost:3001/favorite-fruits');
  }
}

export default App;
