import React, { Component } from 'react';
import './App.css';
import Events from "./containers/Events/Events";
import axios from 'axios';
import MyNavbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Event from "./components/Event/Event";
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
