import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import EventList from "./components/EventList";
import axios from 'axios';
import MyNavbar from "./components/MyNavbar";
import {BrowserRouter, Route} from "react-router-dom";
import Event from "./components/Event";



class App extends Component {

  state = {
      result: [],
      event : {}
  };

  sendKeyword = (keyword) => {
    axios.get(`http://localhost:8080/events/search/${keyword}`)
        .then(res => this.setState({result: res.data}))
  };

  getEvent = (event) => {
      this.state.event = event;
      console.log(this.state.event);
  };

  render() {
      return (
          <BrowserRouter>
            <div className="App">
              <div className="container">
                  <MyNavbar/>
                  <Header sendKeyword={this.sendKeyword}/>
                  <Route exact path='/' render={(props) => <EventList {...props} result={this.state.result} getEvent={this.getEvent} />}/>
                  <Route path='/:id' render={(props) => <Event {...props} event={this.state.event} />}/>
              </div>
            </div>
          </BrowserRouter>
      )
  }
}

export default App;
