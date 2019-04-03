import React, {Component} from 'react';
import axios from "axios";
import EventCard from "../../components/EventCard/EventCard";
import {Link} from 'react-router-dom';
import {API_URLS} from "../../authService/api_urls";
import Header from "../../components/Header/Header";

class Events extends Component {
    state = {
        events: [],
        error: false
    };

    componentDidMount() {
        const { getAccessToken } = this.props.auth;

            const headers = { 'Authorization': `Bearer ${getAccessToken()}`, 'Access-Control-Allow-Origin': 'http://localhost:8080',}

            axios.get(API_URLS.events, {headers})
                .then(res => {
                    this.setState({events: res.data});
                })
                .catch(error => {
                    this.setState({error: true})
                })
    }

    render() {
        let events = <p style={{textAlign: 'center'}}>Something went wrong</p>;
        if(!this.state.error) {
            events = this.state.events.map(
                event => {
                    return (
                        <Link to={'/events/' + event.id} key={event.id}>
                        <EventCard
                            event={{...event}}
                        />
                        </Link>
                    );
                }
            );
        }

        return (
            <div className="Events">
                {events}
            </div>
        )
    }
}

export default Events;