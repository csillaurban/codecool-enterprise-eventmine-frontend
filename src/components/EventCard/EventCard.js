import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Row, Col, Card, Table} from 'react-materialize';
import './Card.css';

const eventCard = (props) => {
        return (

            <Row>
                <Col m={6} s={12}>
                    <Card
                        className="ticket"
                        title={props.name}
                        actions={[<a />,<a />]}
                    >
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
                                <td>{props.location}</td>
                                <td>{props.date.slice(0, 10)}</td>
                                <td>{props.numOfAvailableTickets}</td>
                                <td>{props.price} Ft</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>
            </Row>
        );
}

export default eventCard;


{/*<MDBCol >
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
</MDBCol>*/}