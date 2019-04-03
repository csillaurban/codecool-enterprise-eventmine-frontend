import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Events from "../Events/Events";
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import {Row, Col} from 'react-materialize';
import Navbar from '../../components/Navbar/Navbar';
import Search from '../../components/Search/Search';
import Event from '../../components/Event/Event';
import SearchResults from "../SearchResults/SearchResults";
import Auth from "../../authService/Auth";
import Login from "../../components/Login/Login";
import Callback from "../../components/Callback/Callback";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
    }
}

class EventMine extends Component {




    render() {
        return (
            <div className="EventMine">
                <Row>
                    <Col>
                        <Route path="/" render={(props) => <Login auth={auth} {...props} />} />

                    </Col>
                </Row>
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
                    <Col s={7}>
                        <Route path="/search/results" component={SearchResults}/>
                        <Route path="/events/:id"  component={Event} />

                        <Route path="/callback" render={(props) => {
                            handleAuthentication(props);
                            return <Callback {...props} auth={auth} />
                        }}/>
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
