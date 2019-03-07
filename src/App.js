import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import EventList from "./components/EventList";
import axios from 'axios';
import MyNavbar from "./components/MyNavbar";


class App extends Component {

  state = {
    events: [],
  };

  sendKeyword = (keyword) => {
    axios.get(`http://localhost:8080/events/search/${keyword}`
    ).then(res => this.setState({events: res.data}))
  };

  render() {
      return (
            <div className="App">
              <div className="container">
                  <MyNavbar/>
                  <Header sendKeyword={this.sendKeyword}/>
                  <EventList result={this.state.events}/>
              </div>
            </div>
      )
  }
}

export default App;
