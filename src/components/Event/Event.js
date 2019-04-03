import React, {Component} from 'react';
import '../EventCard/Card.css';
import {Card, Col, Table} from 'react-materialize';
import axios from 'axios';

class Event extends Component {
    state = {
        loadedEvent: null
    }

    componentDidMount() {
        if(this.props.match.params.id) {
            if(!this.state.loadedEvent || (this.state.loadedEvent && this.state.loadedEvent.id != this.props.match.params.id)) {
                axios.get('http://localhost:8080/events/' + this.props.match.params.id)
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
                <Col m={6} s={12}>
                <div className="container">
                <div className="event left-align">
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="card #ffffff white">
                                <div className="card-content #ffffff white">
                                    <span className="card-title">{this.state.loadedEvent.name}</span>
                                    <Table>
                                        <thead>
                                        <tr>
                                            <th>Location</th>
                                            <th>Date</th>
                                            <th>Remaining Tickets</th>
                                            <th>Price</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>{this.state.loadedEvent.location}</td>
                                            <td>{this.state.loadedEvent.date.slice(0, 10)}</td>
                                            <td>{this.state.loadedEvent.numOfAvailableTickets}</td>
                                            <td>{this.state.loadedEvent.price} Ft</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                    <button className="btn waves-effect waves-light" type="submit" name="action">Buy
                                        <i className="material-icons left">add_circle</i>
                                    </button>
                                </div>
                                <div className="card-action">
                                    <a href={"/"}>Back</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </Col>
            )
        }
        return post;
    }

}

export default Event;