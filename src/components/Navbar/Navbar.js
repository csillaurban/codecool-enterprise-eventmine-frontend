import React, {Component} from 'react';
import {Navbar, NavItem} from 'react-materialize';
import './Navbar.css';
import {Link} from 'react-router-dom';




class NavigationBar extends Component {
    render () {
        return (
            <div className="navbar">
                <Navbar brand={<a/>} alignLinks="left">
                    <Link to="/home">
                    <NavItem onclick={this.redirect}>
                        Home
                    </NavItem>
                    </Link>
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