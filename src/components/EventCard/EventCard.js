import React, {Component} from 'react';
import { MDBCol, MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';
import {Link} from "react-router-dom";


const eventCard = (props) => {
        return (
                <MDBCol >
                    <MDBCard className="ticket">
                        <MDBCardBody>
                            <MDBCardTitle className="text-left">{props.name}</MDBCardTitle>
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
                                            <td>{props.location}</td>
                                            <td>{props.date.slice(0, 10)}</td>
                                            <td>{props.numOfAvailableTickets}</td>
                                            <td>{props.price} Ft</td>
                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
        );
}

export default eventCard;