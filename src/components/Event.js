import React, {Component} from 'react';
import './Card.css';

class Event extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.event.name}</h1>
            </div>
        );
    }

}

export default Event;