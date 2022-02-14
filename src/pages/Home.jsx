import React from "react";
import Cardsnews from "../components/CardsNews/CardsNews";
import CarouselHeader from "../components/carousellHeader/CarouselHeader";
import {
  Container,
} from "react-bootstrap";
import { CarouselComments } from "../components/carouselComments/CarouselComments";
import "../App.css";
import "../components/CardsNews/cardsNews.css";
import CollectionTable from "../components/CardsNews/CollectionTable";
import { PreguntasFrecuentes } from "../components/preguntasFrecuentes/PreguntasFrecuentes";

function Home() {
  let sliderProductos = [
    {
      img: "https://res.cloudinary.com/dbv6dgwez/image/upload/v1644556243/Allcot%20Trading/trade_grafica_n0mqed.jpg",
      titulo: "Trading Services",
      subtitulo: "Proyectos VCS",
      descripcion:
        "bla bla bla contenido contenido ",
    },
    {
      img: "https://res.cloudinary.com/dbv6dgwez/image/upload/v1644863866/Allcot%20Trading/digital-screen-with-environment-day-1-scaled_ml3hrw.jpg",
      titulo: "Allcot Green Trading ",
      subtitulo: "Empeza el cambio ",
      descripcion: "bla bla bla blab contenido ",
    },
    {
      img: "https://res.cloudinary.com/dbv6dgwez/image/upload/v1644556243/Allcot%20Trading/WIPR7JLHH5B2LCL6VLTBOGKGKA_h78rjn.jpg",
      titulo: "Datos de interes ",
      subtitulo: "El futuro de CCB ...",
      descripcion: "bla bla bla",
    },
    {
      img: "https://res.cloudinary.com/dbv6dgwez/image/upload/v1644553896/Allcot%20Trading/corsia_fxoaef.jpg",
      titulo: "CORSIA - AEROLINEAS",
      subtitulo: "Conoce las estrategia",
      descripcion: "bla bla bla contenido ",
    },
    {
      img: "https://res.cloudinary.com/dbv6dgwez/image/upload/v1644862056/Allcot%20Trading/blog-3-1024x453_jfi7nq.png",
      titulo: "DESCUBRE LO QUE VIENE",
      subtitulo: "Posicion en Mercado ",
      descripcion: "Bla bla bla bl",
    },
    {
      img: "https://res.cloudinary.com/dbv6dgwez/image/upload/v1644862095/Allcot%20Trading/LOGO_HUELLA-100.recortado_ecblhr.jpg",
      titulo: "GS-VSC-CDM ",
      subtitulo: "Todo lo que necesitas",
      descripcion: "bla bla bla bla bla blab ",
    },
  ];

  let sliderMensajes = [
    {
      id: "1",
      titulo: "Testimonio 1",
      descripcion:
        "Algo bueno que diga el cliente de nosotros ",
      nombre: "Nombre Cliente",
    },
    {
      id: "2",
      titulo: "Testimonio 2",
      descripcion:
        "Algo piola  ",
        nombre: "Nombre CLiente",
    },
    {
      id: "3",
      titulo: "Testimonio 3",
      descripcion:
        "Datos",
        nombre: "Nick",
    },
    {
      id: "4",
      titulo: "Testimonio 4 ",
      descripcion:
        "Feliz comiendo perdiz",
      nombre: "Nicolas, ES",
    },
    {
      id: "5",
      titulo: "Gran valor, traders Maravillosos ",
      descripcion:
        "Leales y respetan todo ",
      nombre: "Tania",
    },
  ];

  return (
    <>
      <CarouselHeader sliderProductos={sliderProductos} />
      <Cardsnews />
      <div className="mb-5">
      <CollectionTable className="mb-5"/>
      </div>
      <div className="mt-5">
        <Container>
          <CarouselComments sliderMensajes={sliderMensajes} />
          <PreguntasFrecuentes/>
        </Container>
      </div>
    </>
  );
}

export default Home;
