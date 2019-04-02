import React, {Component} from 'react';
import {Navbar, NavItem, Button} from 'react-materialize';
import './Navbar.css';

class NavigationBar extends Component {
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

    render () {
        const { isAuthenticated } = this.props.auth;

        return (
            <div className="navbar">
                <Navbar brand={<a/>} alignLinks="left">
                    <NavItem href={"/"}
                             onClick={this.goTo.bind(this, '')}>
                        Menu
                    </NavItem>
                    <NavItem href="/">
                        Concerts
                    </NavItem>
                    <NavItem href="/">
                        Festivals
                    </NavItem>
                    <NavItem href="/">
                        Theater
                    </NavItem>
                    <NavItem>
                        {
                            !isAuthenticated() && (
                                <Button
                                    bsStyle="primary"
                                    className="btn-margin"
                                    onClick={this.login.bind(this)}
                                >
                                    Log In
                                </Button>
                            )
                        }
                    </NavItem>
                    <NavItem>
                        {
                            isAuthenticated() && (
                                <Button
                                    bsStyle="primary"
                                    className="btn-margin"
                                    onClick={this.logout.bind(this)}
                                >
                                    Log Out
                                </Button>
                            )
                        }
                    </NavItem>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;