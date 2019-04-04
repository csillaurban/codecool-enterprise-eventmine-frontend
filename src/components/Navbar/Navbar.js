import React, {Component} from 'react';
import {Navbar, NavItem} from 'react-materialize';
import './Navbar.css';




class NavigationBar extends Component {

    redirect = () => {
        let path = "/home";
        if(sessionStorage.getItem('accessToken')) {
            this.props.history.push(path);
        } else {
            this.props.history.push("/");
        }
    }

    render () {
        return (
            <div className="navbar">
                <Navbar brand={<a/>} alignLinks="left">
                    <NavItem onclick={this.redirect}>
                        Home
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
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;