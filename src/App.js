import React, { Component } from 'react';
import './App.css';
import MyNavbar from './components/MyNavbar';
import Highlights from './components/Highlights';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
        <Highlights/>
      </div>
    );
  }
}

export default App;