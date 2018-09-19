import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard'
import WordCard from './WordCard'

const word = "Hello"; 
class App extends Component {
  render() {
    return (
    <div className="App"> 
      { Array.from(word).map((c, i) => <WordCard value={c} key={i}/>) }          
    </div>
    );
  }
}

export default App;