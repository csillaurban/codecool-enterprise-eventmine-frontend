import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import EventList from "./components/EventList";
import SearchResult from "./components/pages/SearchResult";
import axios from 'axios';

class App extends Component {

    render() {
        return (
          <div className="App">
            <Header/>
            <EventList/>
          </div>
        );
    }
  state = {
    events: [],
    resultsFound: false
  }

  sendKeyword = (keyword) => {
    axios.get(`http://localhost:8080/events/search/${keyword}`
    ).then(res => this.setState({events: res.data, resultsFound: true}))
  }

  emptyResults = () => this.setState({resultsFound: false});


  render() {
    console.log(this.state.resultsFound);
    if(this.state.resultsFound) {
      return (
          <Router>
            <div className="App">
              <div className="container">
                <Header sendKeyword={this.sendKeyword}/>
            <Redirect to="/events/results" render={props=> (
              <React.Fragment>
                <SearchResult events={this.state.events} emptyResults={this.emptyResults}/>
              </React.Fragment>
            )}/>
              </div>
            </div>
          </Router>)
    } else {
      return (
          <Router>
            <div className="App">
              <div className="container">
                <Header sendKeyword={this.sendKeyword}/>
                <Route path="/" render={props => (
                    <React.Fragment>
                        <EventList/>
                    </React.Fragment>
                )}/>

              </div>
            </div>
          </Router>

      )
    }
  }
}

export default App;
