import React, { Component } from 'react';
import spy1 from './spy1.jpg';
import './LobbyButtonSpy.css'

class LobbyButtonSpy extends Component {
  render() {
    return (
      <center>

      <div className="col-xs-6" id="spyset">
        <div className="size-capped">
          <div className="SquareButton" id="spymaster1">
          </div>
        </div>
        <div className="size-capped">
          <div className="ThinButton sized-capped" id="spy1">
          </div>
        </div>
      </div>

      <div className="col-xs-6" id="spyset">
        <div className="size-capped">
          <div className="SquareButton" id="spymaster2">
          </div>
        </div>
        <div className="size-capped">
          <div className="ThinButton" id="spy2">
          </div>
        </div>
      </div>

      </center>
    );
  }
}

export default LobbyButtonSpy;
