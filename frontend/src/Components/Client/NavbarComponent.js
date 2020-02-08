import React, { Component } from 'react';
import {
    Navbar, 
    NavbarBrand, 
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const NavbarComponent = (props) => {
    return (
        <div>
            <Navbar color="light" light expand="md">
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink className="nav-link-header" href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link-header" href="/about">About</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;