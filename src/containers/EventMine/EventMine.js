import React, {Component} from 'react';
import {Route} from 'react-router-dom';
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
        if(!sessionStorage.getItem('accessToken')) {
            return (
                <div className="EventMine">
                    <Route path="/" render={(props) => <Login auth={auth} {...props} />}/>
                    <Route path="/search/results" component={SearchResults}/>
                    <Route path="/events/:id" render={(props) => < Event {...props} auth={auth}/>}/>
                    <Route path="/home" render={(props) => {
                        handleAuthentication(props);
                        return <Callback {...props} auth={auth}/>
                    }}/>
                </div>
            );
        } else {
            return (
                <div className="EventMine">
                    <Route path="/" render={(props) => <Login auth={auth} {...props} />}/>
                    <Route path="/search/results" component={SearchResults}/>
                    <Route path="/events/:id" render={(props) => < Event {...props} auth={auth}/>}/>
                    <Route path="/home" render={(props) => {
                        return <Callback {...props} auth={auth}/>
                    }}/>
                </div>
            );
        }
    }
}

export default EventMine;
