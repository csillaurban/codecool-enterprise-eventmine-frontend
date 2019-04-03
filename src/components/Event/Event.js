import React, {Component} from 'react';
import '../EventCard/Card.css';
import axios from 'axios';
import {API_URLS} from "../../authService/api_urls";

class Event extends Component {
    state = {
        loadedEvent: null
    }

    componentDidMount() {
        if(this.props.match.params.id) {
            if(!this.state.loadedEvent || (this.state.loadedEvent && this.state.loadedEvent.id != this.props.match.params.id)) {
                const { getAccessToken } = this.props.auth;
                const headers = { 'Authorization': `Bearer ${getAccessToken()}`};
                axios.get(API_URLS.event + this.props.match.params.id, { headers })
                    .then(response => {
                        this.setState({loadedEvent: response.data})
                    })
            }
        }
    }

    render() {
        let post = <p>Something's happening</p>
        if(this.state.loadedEvent) {
            post = (
                <div className="Event">
                    <h1>{this.state.loadedEvent.name}</h1>
                </div>
            )
        }
        return post;
    }

}

export default Event;