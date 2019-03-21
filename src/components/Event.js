import React, {Component} from 'react';
import { MDBMedia, MDBIcon, MDBCol, MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';
import './Card.css';

class Event extends Component {

    render() {
        return (
            <MDBCol >
                <MDBCard className="ticket">
                    <MDBCardBody>
                        <MDBCardTitle className="text-left">{this.props.event.name}</MDBCardTitle>
                        <MDBCardText>
                            <MDBTable borderless responsive >
                                <MDBTableHead>
                                    <tr>
                                        <th>Location</th>
                                        <th>Date</th>
                                        <th>Remaining Tickets</th>
                                        <th>Price</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    <tr>
                                        <td>{this.props.event.location}</td>
                                        <td>{this.props.event.date.slice(0, 10)}</td>
                                        <td>{this.props.event.numOfAvailableTickets}</td>
                                        <td>{this.props.event.price} Ft</td>
                                    </tr>
                                </MDBTableBody>
                            </MDBTable>
                        </MDBCardText>
                    </MDBCardBody>
                    <MDBBtn className="align-middle" color="success" href="#">Buy</MDBBtn>
                </MDBCard>
            </MDBCol>
        );
    }

}

export default Event;