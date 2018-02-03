import React, { Component } from 'react';
import WordGrid from './WordGrid/WordGrid';

class Game extends Component {
  render() {
    return (
      <div className="Game">
          <h1>I HATE YOU</h1>
        <div className="container">
          <div className="row">
            <p>To get started. jump off a cliff</p>
            <WordGrid />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
