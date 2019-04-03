import React, {Component} from 'react';
import '../EventCard/Card.css';
import axios from 'axios';
import {API_URLS} from "../../authService/api_urls";
import Header from "../Header/Header";

class Event extends Component {
    state = {
        loadedEvent: null,
    }


    componentDidMount() {
        if(sessionStorage.getItem('accessToken')) {
            console.log("token")
            if (this.props.match.params.id) {
                if (!this.state.loadedEvent || (this.state.loadedEvent && this.state.loadedEvent.id != this.props.match.params.id)) {
                    const token = sessionStorage.getItem('accessToken');
                    const headers = {
                        'Authorization': `Bearer ${token}`,
                        'Access-Control-Allow-Origin': 'http://localhost:8080'
                    };
                    axios.get(API_URLS.event + this.props.match.params.id, {headers})
                        .then(response => {
                            console.log(response.data);
                            this.setState({loadedEvent: response.data})
                        })
                }
            }
        }
    }

    render() {
        if(this.state.loadedEvent) {
            return (
                <div className="Event">
                    <Header />
                    <h1>{this.state.loadedEvent.name}</h1>
                </div>
            );
        } else {
            return (
                <h2>Event is not loaded</h2>
            );
        }
    }
}

export default Event;