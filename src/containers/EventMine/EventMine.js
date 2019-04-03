import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Events from "../Events/Events";
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import {Row, Col} from 'react-materialize';
import Navbar from '../../components/Navbar/Navbar';
import Search from '../../components/Search/Search';
import SeatMap from '../../components/SeatMap/SeatMap';
import Event from '../../components/Event/Event';
import SearchResults from "../SearchResults/SearchResults";

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
                        <Search />
                    </Col>
                </Row>
                <Row>
                    <Col l={3}>
                        <Route path="/search/results" component={SearchResults}/>
                        <Route exact path="/"  component={Events}/>
                        <Route path={"/events/:id"}  component={Event}/>
                    </Col>
                <Col>
                    <Route path={"/events/:id"}  component={SeatMap}/>
                </Col>
                </Row>
            </div>
        );
    }
}

export default EventMine;
