import React, {Component} from 'react';


class Login extends Component {
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
        const { renewSession } = this.props.auth;

        if (localStorage.getItem('isLoggedIn') === 'true') {
            renewSession();
        }
    }

    render() {
        const { isAuthenticated } = this.props.auth;


        return (
            <div>

                        {
                            !isAuthenticated() && (
                                <button
                                    type='submit'
                                    onClick={this.login.bind(this)}
                                >
                                    Log In
                                </button>
                            )
                        }
                        {
                            isAuthenticated() && (
                                <button
                                    type='submit'
                                    onClick={this.logout.bind(this)}
                                >
                                    Log Out
                                </button>
                            )
                        }

            </div>
        );
    }
}

export default Login;