import React from 'react'
import './navbarMain.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs';
import { GrTwitter } from 'react-icons/gr';
import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa';



export const NavbarMain = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };

    return (
        <>
            <Navbar bg="light" className="sticky-top" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <img src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1644553896/Allcot%20Trading/Allcot_Logo_horizontal_ltqc4p.png" alt="img logo" className="nav-logo-desktop" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto nav-links-text">
                            <Nav.Link as={NavLink} exact to="/" onClick={scrollToTop}>Home</Nav.Link>
                            <Nav.Link as={NavLink}  to="/about" onClick={scrollToTop}>About Us</Nav.Link>
                            <Nav.Link as={NavLink}  to="/contact" onClick={scrollToTop}>Contact Us</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="navbar-responsive-redes">
                        <div className="navbar-responsive-icons-container d-flex justify-content-evenly my-5">
                            <li>
                                <a href="/facebook" className="social-navbar-icon"><BsFacebook /></a>
                            </li>
                            <li>
                                <a href="/twitter" className="social-navbar-icon"><GrTwitter /></a>
                            </li>
                            <li>
                                <a href="/instagram" className="social-navbar-icon"><FaInstagramSquare /></a>  
                            </li>
                            <li>
                                <a href="/linkdin" className="social-navbar-icon"><FaLinkedin /></a>  
                            </li>
                        </div>
                    </div>
                </Container>
            </Navbar>

        </>

    )
}

