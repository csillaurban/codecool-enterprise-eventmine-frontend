import React, {Component} from 'react';
import { Icon, Button} from 'react-materialize';

class Login extends Component {
    state = {
        isLoggedIn: false
    }

    checkIfAccessToken = () => {
        if(sessionStorage.getItem('accessToken')) {
            this.setState({isLoggedIn: true})
        }
    }

    timeout() {
        setTimeout(this.checkIfAccessToken, 1000); // Here
    }

    login() {
        this.props.auth.login();

    }

    componentDidMount() {
        this.timeout();
        const { renewSession } = this.props.auth;
        if (sessionStorage.getItem('isLoggedIn') === 'true') {
            renewSession();
        }
    }

    redirect = () => {
        let path = "/";
        this.props.history.push(path);
        this.setState({isLoggedIn: false})
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('accessToken');
    }

    render() {
        let loggedIn = this.state.isLoggedIn;
        if(!loggedIn) {
            return (
                <div>
                    <Button type="submit" onClick={this.login.bind(this)} waves="light" style={{marginRight: '5px'}}>
                        Login
                        <Icon left>
                            login
                        </Icon>
                    </Button>
                </div>
            );
        } else {
            return(
                <div>
                    <Button type="submit" onClick={this.redirect} waves="light" style={{marginRight: '5px'}} >
                        Logout
                        <Icon left>
                            logout
                        </Icon>
                    </Button>
                </div>
            );
        }
    }
}

export default Login;