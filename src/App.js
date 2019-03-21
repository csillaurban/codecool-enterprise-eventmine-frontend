import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import EventList from "./components/EventList";
import axios from 'axios';
import MyNavbar from "./components/MyNavbar";
import Route from "react-router-dom/es/Route";
import Event from "./components/Event";
import {BrowserRouter} from "react-router-dom";



class App extends Component {

  state = {
    events: [],
  };

  sendKeyword = (keyword) => {
    axios.get(`http://localhost:8080/events/search/${keyword}`)
        .then(res => this.setState({events: res.data}))
  };

  render() {
      return (
          <BrowserRouter>
            <div className="App">
              <div className="container">
                  <MyNavbar/>
                  <Header sendKeyword={this.sendKeyword}/>
                  <Route path='/' render={(props) => <EventList {...props} result={this.state.events} />}/>
                  <Route path='/event' component={Event}/>
              </div>
            </div>
          </BrowserRouter>
      )
  }
}

export default App;
