import React from "react";
import "./carouselHeader.css";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import "../CardsNews/cardsNews.css"




const Carouselheader = ({ sliderProductos }) => {

  const mapSlider = sliderProductos.map((producto, i) => (
    <Carousel.Item key={i} producto={producto}>
    <Row className="row-height d-flex flex-wrap">
      <Col className="col-12 col-md-6 p-0">
        <Card className="bg-dark text-white borde text-center">
          <Card.Img
            src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1644556648/Allcot%20Trading/1200px-World_map_green_lucpnp.png"
            alt="Card image"
          />
          <Card.ImgOverlay className="fondo">
            <Card.Title className="card-titulo">
              {producto.titulo}
            </Card.Title>
            <Card.Text className="sub-title">
              {producto.subtitulo}
            </Card.Text>
            <Card.Text className="card-description">
              {producto.descripcion}
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Col>
      <Col className="col-12-d-none col-md-6 p-0">
        <img
          className="d-block w-100 card-img"
          src={producto.img}
          alt="Second slide"
        />
      </Col>
    </Row>
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  ));

  return (
    <Carousel className="carousel-style " fade>
      {mapSlider}
    </Carousel>
  );
};

export default Carouselheader;
