import React, { Component } from 'react';
import spy1 from './spy1.jpg';
import './LobbyButtonSpy.css'

class LobbyButtonSpy extends Component {
  render() {
    return (
      <center>
      <div className="col-sm-6">
        <div className="SquareButton" id="spymaster1"></div>
        <div className="ThinButton" id="spy1"></div>
      </div>

      <div className="col-sm-6">
        <div className="SquareButton" id="spymaster2"></div>
        <div className="ThinButton" id="spy2"></div>
      </div>
      </center>
    );
  }
}

export default LobbyButtonSpy;
