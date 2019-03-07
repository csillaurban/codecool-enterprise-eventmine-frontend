import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import EventList from "./components/EventList";

class App extends Component {

    render() {
        return (
          <div className="App">
            <Header/>
            <EventList/>
          </div>
        );
    }
}

export default App;
