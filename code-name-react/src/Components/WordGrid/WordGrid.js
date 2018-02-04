import React, { Component } from 'react';
import Word from './Word/Word';
import './WordGrid.css';

class WordGrid extends Component {
  render() {
    let wordItems;
    if(this.props.words) {
        wordItems = this.props.words.map(word => {
            return (
                <Word key={word} word={word} />
            );
        });
    }
    return (
      <div className="WordGrid">
        <header className="wordGridHeader">
            <h1>Word Grid</h1>
        </header>   
        {wordItems}
      </div>
    );
  }
}

export default WordGrid;
