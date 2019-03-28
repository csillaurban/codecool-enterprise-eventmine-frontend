import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import Events from "../Events/Events";
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import {Row, Col} from 'react-materialize';
import Navbar from '../../components/Navbar/Navbar';
import Search from '../../components/Search/Search';
import Event from '../../components/Event/Event';
import SearchResults from "../SearchResults/SearchResults";
import axios from "axios";

class EventMine extends Component {
    state = {
        keyword: '',
        isKeyword: false
    }

    sendKeyword = (keyword) => {
        this.setState({keyword: keyword});
        this.setState({isKeyword: true})
    }


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
                    <Search
                        sendKeyword={this.sendKeyword}/>
                    </Col>
                </Row>
                <Row>
                    <Col s={7}>
                <Route path="/" exact component={Events}/>
                <Route path="/events/:id" exact component={Event}/>
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


{/*componentDidMount() {
    axios.get(`http://localhost:8080/events/search/${this.state.keyword}`)
        .then(res => {
            this.setState({results: res.data});
            this.setState({isKeyword: true})
        })
}*/}