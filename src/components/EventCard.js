import React, {Component} from 'react';
import { MDBCol, MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';
import {Link} from "react-router-dom";


class EventCard extends Component {

    sendEvent = (e) => {
        this.props.getEvent(this.props.event);
        e.stopPropagation();
    };

    render() {
        return (
            <Link to={'/' + this.props.event.id} onClick={this.sendEvent}>
                <MDBCol size="8">
                    <MDBCard className="w-50 p-1 mb-4 h-25" style={{ width: "22rem"}}>
                        <MDBCardBody>
                            <MDBCardTitle className="text-left">{this.props.event.name}</MDBCardTitle>
                            <MDBCardText>
                                <MDBTable borderless responsive className=".ml-3">
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
            </Link>
        );
    }

}

export default EventCard;