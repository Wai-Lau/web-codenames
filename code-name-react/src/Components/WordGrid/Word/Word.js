import React, { Component } from 'react';
import './Word.css';

class Word extends Component {

    handleClick(e) {
        console.log(this.props.word);
    }

  render() {
    return (
      <div className="Word col-md-5ths">
        <div className="wordContent alert" onClick={this.handleClick.bind(this)}>
            {this.props.word}
        </div>
      </div>
    );
  }
}

export default Word;