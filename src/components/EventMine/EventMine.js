import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import Events from "../Events";

class EventMine extends Component {
    render() {
        return (
            <div className="EventMine">
                <Route path="/events" component={Events}/>
                <Redirect from="/" to="/events"/>
            </div>
        );
    }
}

export default EventMine;