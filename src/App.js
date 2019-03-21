import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import EventList from "./components/EventList";
import axios from 'axios';
import MyNavbar from "./components/MyNavbar";
import {MDBCol, MDBRow, MDBContainer} from 'mdbreact';


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
                  <MDBContainer>
                      <MDBRow>
                          <MDBCol>
                  <MyNavbar/>
                          </MDBCol>
                      </MDBRow>
                      <MDBRow>
                          <MDBCol>
                  <Header sendKeyword={this.sendKeyword}/>
                          </MDBCol>
                      </MDBRow>
                      <MDBRow>
                          <MDBCol>
                  <EventList result={this.state.events}/>
                          </MDBCol>
                      </MDBRow>
                  </MDBContainer>
              </div>
            </div>
      )
  }
}

export default App;
