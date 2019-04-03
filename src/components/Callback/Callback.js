import React, {Component} from 'react';
import Events from "../../containers/Events/Events";

class Callback extends Component {
    state = {
        accessToken: false
    }

    checkIfAccessToken = () => {
        if(sessionStorage.getItem('accessToken')) {
            this.setState({accessToken: true})
        }
    }

    timeout() {
            setTimeout(this.checkIfAccessToken, 1000); // Here
    }

    componentDidMount() {
        this.timeout();
    }

    render() {
        let token = this.state.accessToken;
        if(!token) {
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <Events auth={this.props.auth} />
                </div>
            );
        }
    }
}

export default Callback;
