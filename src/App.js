import React, { Component } from 'react';
import './App.css';

import Teams from './components/Teams'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Teams />
      </div>
    );
  }
}

export default App;