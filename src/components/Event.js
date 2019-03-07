import React, {Component} from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';


class Event extends Component {

    render() {
        return (
            <MDBCol>
                <MDBCard style={{ width: "22rem" }}>
                    <MDBCardBody>
                        <MDBCardTitle>{this.props.event.name}</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make
                            up the bulk of the card&apos;s content.
                        </MDBCardText>
                        <MDBBtn href="#">MDBBtn</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        );
    }

}

export default Event;