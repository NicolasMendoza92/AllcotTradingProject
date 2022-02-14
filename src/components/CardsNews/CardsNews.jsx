import React, { useEffect } from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./cardsNews.css";
// Imports Effect to scroll down
import Aos from "aos";
import "aos/dist/aos.css";


const scrollToTop = () => {
  window.scrollTo(0, 200);
};

const Cardsnews = () => {
  // Efecto para scroll down 
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <>
      <div data-aos="fade-up" className="mt-5 text-center ">
        <h3 className="news-titulo">El Mundo del Trading</h3>
      </div>
      <Container className="mt-2 mb-3">
        <Row data-aos="fade-up">
          <Col className="col-tamaño">
            <Card
              className="card-estilo border-0 text-center"
              style={{ width: "21rem" }}
            >
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1644865693/Allcot%20Trading/smartest_trading_vdkx7a.png"
              />
              <Card.Body>
                <Card.Title className="card-titulo">
                  Compra y Venta de Creditos
                </Card.Title>
                <Card.Text className="borde-card"></Card.Text>
                <Card.Text className="texto-card">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi est at vel. Inventore, recusandae. Facilis eaque quidem voluptas eum provident atque vero iste aperiam.
                </Card.Text>
                <Button as={NavLink} to="/404" onClick={scrollToTop} className="button-news">Ver</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-tamaño">
            <Card
              className="card-estilo border-0 text-center"
              style={{ width: "21rem" }}
            >
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1644865693/Allcot%20Trading/smartest_trading_vdkx7a.png"
              />
              <Card.Body>
                <Card.Title className="card-titulo">
                  Precios y alternativas de ventas
                </Card.Title>
                <Card.Text className="borde-card"></Card.Text>
                <Card.Text className="texto-card">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos dicta nostrum odit voluptates, asperiores tempora ut nihil blanditiis sunt.
                </Card.Text>
                <Button as={NavLink} to="/404" onClick={scrollToTop} className="button-news">Ver</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-tamaño">
            <Card
              className="card-estilo border-0 text-center"
              style={{ width: "21rem" }}
            >
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1644865693/Allcot%20Trading/smartest_trading_vdkx7a.png"
              />
              <Card.Body>
                <Card.Title className="card-titulo">
                  Mira nuestro porfolio de venta 
                </Card.Title>
                <Card.Text className="borde-card"></Card.Text>
                <Card.Text className="texto-card">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut dolor quae hic porro eaque doloribus eligendi fugiat illum, nulla blanditiis corrupti alias.
                </Card.Text>
                <Button as={NavLink} to="/404" onClick={scrollToTop} className="button-news">Ver</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cardsnews;
