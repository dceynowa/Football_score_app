import React, { Component } from 'react';
import './App.css';

import Teams from './components/Teams'
import Competitions from './components/Competitons'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Competitions />
      </div>
    );
  }
}

export default App;