import React from 'react';
import {Navbar, NavItem} from 'react-materialize';
import './Navbar.css';

const navbar = () => {
    return (
        <div className="navbar">
        <Navbar brand={<a />} alignLinks="left">
            <NavItem href={"/"}>
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

export default navbar;