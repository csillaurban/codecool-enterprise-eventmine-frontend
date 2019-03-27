import React, { Component } from 'react';
import './App.css';
import Events from "./containers/Events/Events";
import axios from 'axios';
import MyNavbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Event from "./components/Event/Event";
import EventMine from "./containers/EventMine/EventMine";



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
                <EventMine/>
                  {/*<MyNavbar/>
                  <Header sendKeyword={this.sendKeyword}/>
                  <Route exact path='/' render={(props) => <EventList {...props} result={this.state.result} getEvent={this.getEvent} />}/>
                  <Route path='/:id' render={(props) => <Event {...props} event={this.state.event} />}/>*/}
            </div>
          </BrowserRouter>
      )
  }
}

export default App;
