import React from "react";
import "./carouselHeader.css";
import { Card, Carousel } from "react-bootstrap";
import "../CardsNews/cardsNews.css"
import { NavLink } from "react-router-dom";

const Carouselheader = ({ sliderProductos }) => {

  const scrollToTop = () => {
    window.scrollTo(0, 250);
  };

  const mapSlider = sliderProductos.map((producto, i) => (
    <Carousel.Item key={i} producto={producto}>
      <Card>
        <Card.Img
          src={producto.img}
          alt="Card image"
        />
        <Card.ImgOverlay className="mt-4 p-5">
          <div className="text-center  align-content-center glass-card">
            <Card.Title className="card-titulo">
              {producto.titulo}
            </Card.Title>
            <p className="text-description">
              {producto.subtitulo}
            </p>
            <p className="text-description">
              {producto.descripcion}
            </p>
            <button as={NavLink} to="/" onClick={scrollToTop} className="btn-general-style">
              Saber Mas
            </button>
          </div>
        </Card.ImgOverlay>
      </Card>
      <Carousel.Caption></Carousel.Caption>
    </Carousel.Item>

  ));

  return (
    <Carousel fade>
      {mapSlider}
    </Carousel>
  );
};

export default Carouselheader;
