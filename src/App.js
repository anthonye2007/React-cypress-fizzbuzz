import React, { Component } from 'react';
import './App.css';
import Result from './Result';
import { getNumber } from './getNumber';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { shouldShow: false };
  }
  
  render() {
    return (
      <div className="App">
        <button id="submit" 
          onClick={this.handleClick}
        >Get Number</button>
        <Result 
          shouldShow={this.state.shouldShow} 
          number={this.state.number} 
        ></Result>
      </div>
    );
  }

  handleClick = () => {
    getNumber().then((num) => {
      this.setState({shouldShow: true, number: num});
    })
  }
}

export default App;
