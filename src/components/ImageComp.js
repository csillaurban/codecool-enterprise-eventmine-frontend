import React, { Component } from 'react';
import image from '/home/csilla/codecool/Advanced/eventmine-frontend/src/header.jpg';
import {Col, Image, Row} from 'react-bootstrap';
import SearchField from "./SearchField";

class ImageComp extends Component {
    render() {
        return (
            <div className="ImageComp">
                <Image src={image} fluid />
                    <Col md={{ span: 6, offset: 3 }} className="search">
                        <SearchField/>
                    </Col>
            </div>
        );
    }
}

const style = {
    backgroundImage: image
}




export default ImageComp;