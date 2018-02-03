import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Code Names</h1>
        </header>
        <div className="container">
          <div className="row">
            <p>To get started. jump off a cliff</p>
          </div>
          <div className="btn-group">
            <button className="btn btn-danger" id="newGame">New Game!</button>
            <button className="btn btn-success" id="joinGame">Join Game</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
