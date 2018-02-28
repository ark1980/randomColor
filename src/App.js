import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './Box';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Random Color</h1>
        </header>
        <Box />
      </div>
    );
  }
}

export default App;
