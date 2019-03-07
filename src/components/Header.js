import React, { Component } from 'react';
import {Col, Row} from "react-bootstrap";
import SearchField from "./SearchField";
import ImageComp from "./ImageComp";


class Header extends Component {
    render() {
        return (
            <div className="Header">
                <ImageComp/>
            </div>
        );
    }
}


export default Header;