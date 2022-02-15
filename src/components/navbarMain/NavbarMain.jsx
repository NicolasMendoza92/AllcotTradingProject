import React from 'react'
import './navbarMain.css'
import {Container,  Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { NavTop } from './NavTop';




export const NavbarMain = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <NavTop />
            <Navbar bg="light" className="sticky-top nav-main" expand="lg">
                <Container>
                <Navbar.Brand>
                    <img src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1644553896/Allcot%20Trading/Allcot_Logo_horizontal_ltqc4p.png" alt="img logo" className="nav-logo-desktop" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-5 d-flex align-items-center justify-content-between nav-links-text">
                        <Nav.Link as={NavLink} exact to="/" onClick={scrollToTop}>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about" onClick={scrollToTop}>About Us</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" onClick={scrollToTop}>Contact Us</Nav.Link>
                        <NavDropdown title="User" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>

        </>

    )
}

