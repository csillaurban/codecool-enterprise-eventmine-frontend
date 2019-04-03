import React, {Component} from 'react';


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

    goTo(route) {
        this.props.history.replace(`/${route}`)
    }

    login() {
        this.props.auth.login();

    }

    logout() {
        this.props.auth.logout();
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
        console.log(this.props)
        let loggedIn = this.state.isLoggedIn;
        console.log(this.state.isLoggedIn)
        if(!loggedIn) {
            return (
                <div>
                <button
                    type='submit'
                    onClick={this.login.bind(this)}
                >
                    Log In
                </button>
                </div>
            );
        } else {
            return(
                <div>
                <button
                    type='submit'
                    onClick={this.redirect}
                >
                    Log Out
                </button>
                </div>
            );
        }
    }
}

export default Login;