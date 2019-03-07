import React, {Component} from 'react';
import axios from "axios";
import Event from "./Event";

class EventList extends Component {

    state = {
        events:[]
    };


    componentDidMount() {
        axios.get('http://localhost:8080/events/list/popularity')
            .then(res => this.setState({events: res.data}))
    }


    render() {
        return this.state.events.map((event) => <Event key={event.eventId} event={event} />)
    }
}

export default EventList;