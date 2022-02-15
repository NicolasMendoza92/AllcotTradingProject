import React from 'react'
import { Container } from 'react-bootstrap'
import { BsFacebook, BsFillTelephoneFill } from 'react-icons/bs';
import { GrMail, GrTwitter } from 'react-icons/gr';
import { FaLinkedin, FaYoutubeSquare } from 'react-icons/fa';
import './navbarMain.css'

export const NavTop = () => {

    return (
        <nav className="p-0 nav-top" expand="lg" >
            <Container className="d-flex justify-content-between">
                <div className="navbar-responsive-icons-container d-flex">
                    <div className='dropdown-tel'>
                        <li>
                            <a href="/facebook" className="social-navbar-icon"><BsFillTelephoneFill /></a>
                        </li>
                        <div class="dropdown-content">
                            <a href="/face">Link 1</a>
                            <a href="/face">Link 2</a>
                            <a href="/face">Link 3</a>
                        </div>
                    </div>
                    <div className='dropdown-tel'>
                        <li>
                            <a href="/twitter" className="social-navbar-icon"><GrMail /></a>
                        </li>
                        <div class="dropdown-content">
                            <a href="/face">Link 1</a>
                            <a href="/face">Link 2</a>
                            <a href="/face">Link 3</a>
                        </div>
                    </div>
                </div>
                <div className="navbar-responsive-icons-container d-flex">
                    <li>
                        <a href="/facebook" className="social-navbar-icon"><BsFacebook /></a>
                    </li>
                    <li>
                        <a href="/twitter" className="social-navbar-icon"><GrTwitter /></a>
                    </li>
                    <li>
                        <a href="/instagram" className="social-navbar-icon"><FaYoutubeSquare /></a>
                    </li>
                    <li>
                        <a href="/linkdin" className="social-navbar-icon"><FaLinkedin /></a>
                    </li>
                </div>


            </Container>
        </nav>
    )
}
