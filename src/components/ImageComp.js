import React, { Component } from 'react';
import SearchField from "./SearchField";
import {MDBContainer, MDBCol, MDBRow, MDBView, MDBMask} from "mdbreact";
import image from './header.jpg';

class ImageComp extends Component {
    render() {
        return (
            <MDBContainer>
                <MDBRow >
                    <MDBCol>
                        <MDBView>
                            <img
                                src={image}
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask className="flex-center" overlay="teal-slight">
                                <SearchField/>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}


export default ImageComp;