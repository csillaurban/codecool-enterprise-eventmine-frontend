import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
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
        isSubmitted: false,
        results: []
    }

    sendKeyword = (keyword) => {
        axios.get(`http://localhost:8080/events/search/${keyword}`)
            .then(res => {
                console.log("Response: ");
                console.log(res.data);
                    this.setState({keyword: keyword});
                    this.setState({results: res.data});
                    this.setState({isSubmitted: true})
                }
            )
    };


    render() {
        let redirect = null;
        let searchResults = null;
        if(this.state.isSubmitted) {
            searchResults = [...this.state.results];
            redirect = <Redirect to="/search/results" />
            console.log("search results");
            console.log(searchResults)
        }
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
                        {redirect}
                        <Switch>
                            <Route path="/" exact component={Events}/>
                            <Route path="/events/:id" exact component={Event}/>
                            <Route path="/search/results" exact render={(props) => <SearchResults search={searchResults}/>}/>
                        </Switch>
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


{/**/}