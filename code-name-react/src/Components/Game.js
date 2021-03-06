import React, { Component } from 'react';
import WordGrid from './WordGrid/WordGrid';
import './Game.css';

class Game extends Component {
    constructor() {
      super();
      this.state = {
        words: [
            "evil",
            "mercy",
            "destruction",
            "car",
            "engine",
            "phone",
            "savanna",
            "tiger",
            "god",
            "school",
            "pretend",
            "fix",
            "drive",
            "fidget",
            "lucky",
            "work",
            "explain",
            "number",
            "limit",
            "apple",
            "banana",
            "blur",
            "green",
            "white",
            "power"
        ],
        phase: "HINTING",
        time: {},
        seconds: 180,
        percent: "100%" 
      }
      this.timer = 0;
      this.startTimer = this.startTimer.bind(this);
      this.countDown = this.countDown.bind(this);
    }
    secondsToTime(secs){
      let hours = Math.floor(secs / (60 * 60));
  
      let divisor_for_minutes = secs % (60 * 60);
      let minutes = Math.floor(divisor_for_minutes / 60);
  
      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);
  
      let obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
      };
      return obj;
    }

    componentDidMount() {
      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
    }
    startTimer() {
      if (this.timer == 0) {
        this.timer = setInterval(this.countDown, 1000);
      }
    }
    countDown() {
      // Remove one second, set state so a re-render happens.
      let seconds = this.state.seconds - 1;
      let percent = seconds.toString(10)/180 + "%";
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
        percent: percent,
      });
      
      // Check if we're at zero.
      if (seconds == 0) { 
        clearInterval(this.timer);
      }
    }
  render() {
    return (
      <div className="Game"> 
        <header className="gameHeader">
          <h1>I HATE YOU</h1>
        </header> 
        <div className="container">
        <button onClick={this.startTimer}>Start</button>
        <h3>{this.state.phase} <span class="label label-default">{this.state.time.m}: {this.state.time.s}</span></h3>
        <div class="progress">
  <div className="progress-bar" aria-valuemin="0" aria-valuemax="100" style={{width: this.state.percent}}>
    60%
  </div>  
</div>  
          <div className="row">
            <WordGrid words={this.state.words} />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
