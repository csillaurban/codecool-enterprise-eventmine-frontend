import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import EventMine from "./containers/EventMine/EventMine";

class App extends Component {

  render() {
      return (
          <BrowserRouter>
            <div className="App">
                <EventMine/>
            </div>
          </BrowserRouter>
      )
  }
}

export default App;


