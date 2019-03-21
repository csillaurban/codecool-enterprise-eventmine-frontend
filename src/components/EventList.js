import React, {Component} from 'react';
import axios from "axios";
import EventCard from "./EventCard";

class EventList extends Component {

    state = {
        events: []
    };


    componentDidMount() {
        axios.get('http://localhost:8080/events/list/popularity')
            .then(res => this.setState({events: res.data}))
    }


    render() {
        console.log(this.props.result);
        if(this.props.result.length === 0) {
            return this.state.events.map((event) => <EventCard getEvent={this.props.getEvent} key={event.id} event={event}/>)
        } else {
            return this.props.result.map((event) => <EventCard getEvent={this.props.getEvent} key={event.id} event={event}/>)
        }
    }
}

export default EventList;