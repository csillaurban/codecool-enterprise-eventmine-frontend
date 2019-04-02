import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import EventMine from "./containers/EventMine/EventMine";
import history from './history';


class App extends Component {

  render() {
      return (
          <BrowserRouter history={history}>
            <div className="App">
                <EventMine/>
            </div>
          </BrowserRouter>
      )
  }
}

export default App;


