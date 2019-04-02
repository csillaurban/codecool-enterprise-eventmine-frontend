import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Events from "../Events/Events";
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import {Row, Col} from 'react-materialize';
import Navbar from '../../components/Navbar/Navbar';
import Search from '../../components/Search/Search';
import Event from '../../components/Event/Event';
import SearchResults from "../SearchResults/SearchResults";
import Callback from "../../callback/Callback";
import Auth from "../../authService/Auth";

const auth = new Auth();


class EventMine extends Component {

    handleAuthentication = ({location}) => {
        if (/access_token|id_token|error/.test(location.hash)) {
            auth.handleAuthentication();
        }
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
                        <Search />
                    </Col>
                </Row>
                <Row>
                    <Col s={7}>
                        <Route path="/search/results" render={(props) => <SearchResults auth={auth} {...props} />}/>
                        <Route exact path="/"  render={(props) => <Events auth={auth} {...props} />}/>
                        <Route path={"/events/:id"}  render={(props) => <Event auth={auth} {...props} />}/>
                        <Route path="/callback" render={(props) => {
                            this.handleAuthentication(props);
                            return <Callback {...props} />
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
