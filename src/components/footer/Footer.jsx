import React from 'react'
import "./footer.css";
// react-icons
import { FaArrowUp, FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';

export const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
                <div className="mt-auto">
                    <div className="footer">
                        <div className="row text-center align-items-center">
                            <div className="col-12  my-4">
                                <div className="mb-2 social-icon">
                                    <h5>SEGUINOS EN NUESTRAS REDES</h5>
                                    <a href="." target="blank">
                                        <FaFacebookSquare />
                                    </a>
                                    <a href="." target="blank">
                                        <FaTwitterSquare />
                                    </a>
                                    <a href="." target="blank">
                                        <FaLinkedin />
                                    </a>
                                    <a href="." target="blank">
                                        <FaYoutubeSquare />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row text-center align-items-center link-effect">
                            <div className="col-12 col-lg-3 col-md-6 my-4">
                                <h5>CONCATENOS</h5>
                                <div className="links mb-2">
                                    <a href="." >ts@allcot.com</a><br />
                                    <a href="." >+3816807710</a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 col-md-6 my-4">
                                <h5>TRADERS</h5>
                                <div className="links mb-2">
                                    <a href="."  >Tomas Stocker</a><br />
                                    <a href="."  >Monica de Oliveira</a><br />
                                    <a href="."  >Mary de Oliveira</a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 col-md-6 my-4">
                                <h5>EVENTOS</h5>
                                <div className="links">
                                    <a href="."  >La fiesta del Secreto</a><br />
                                    <a href="."  >Los Pecados Capitales</a><br />
                                    <a href="."  >Creditos La Escondida</a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 col-md-6 my-4">
                                <h5>SOPORTE</h5>
                                <div className="links">
                                    <a href="."  >Servicio Tecnico</a><br />
                                    <a href="."  >Avisos Legales</a><br />
                                    <a href="."  >Cookies</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between footer2">
                        <div>
                            <p>© 2022 Allcot Trading All rights reserved</p>
                        </div>
                        <div>
                            <p>Keep Calm and buy a credit</p>
                        </div>
                        <div>
                            <button className="volverArriba" onClick={scrollToTop}><FaArrowUp /></button>
                        </div>
                    </div>
                </div>
    )
}
