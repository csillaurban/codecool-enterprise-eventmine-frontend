import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import Events from "../Events/Events";
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import {Row, Col} from 'react-materialize';
import Navbar from '../../components/Navbar/Navbar';
import SearchField from '../../components/Search/SearchField';

class EventMine extends Component {
    render() {
        return (
            <div className="EventMine">
                <Row>
                    <Col>
                        <Navbar/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                <ImageSlider />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <SearchField/>
                    </Col>
                </Row>
                <Row>
                    <Col s={7}>
                <Route path="/events" component={Events}/>
                <Route path="/results/:keyword" />
                <Redirect from="/" to="/events"/>
                    </Col>
                    <Col s={5}>
                        <p>some other content</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default EventMine;