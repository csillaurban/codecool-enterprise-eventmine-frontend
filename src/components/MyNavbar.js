import React , { Component}  from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

class MyNavbar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">EventMine</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-l" navbar>
                            <NavItem>
                                <NavLink href="/components/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Concerts</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Festivals</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Theatre</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default MyNavbar;