import React, {Component} from 'react';
import {Navbar, NavItem} from 'react-materialize';
import './Navbar.css';

class NavigationBar extends Component {
    render () {
        return (
            <div className="navbar">
                <Navbar brand={<a/>} alignLinks="left">
                    <NavItem href={"/home"} >
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
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;