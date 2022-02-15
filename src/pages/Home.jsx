import React from "react";
import Cardsnews from "../components/CardsNews/CardsNews";
import CarouselHeader from "../components/carousellHeader/CarouselHeader";
import {Container} from "react-bootstrap";
import "../App.css";
import "../components/CardsNews/cardsNews.css";
import CollectionTable from "../components/CardsNews/CollectionTable";
import { PreguntasFrecuentes } from "../components/preguntasFrecuentes/PreguntasFrecuentes";

function Home() {
  let sliderProductos = [
    {
      img: "https://res.cloudinary.com/dbv6dgwez/image/upload/v1644924611/Allcot%20Trading/El-efecto-de-las-expectativas-en-el-trading_wo6pql.jpg",
      titulo: "Trading Services",
      subtitulo: "Proyectos VCS",
      descripcion:"bla bla bla contenido contenido ",
    },
    {
      img: "https://res.cloudinary.com/dbv6dgwez/image/upload/v1644556243/Allcot%20Trading/WIPR7JLHH5B2LCL6VLTBOGKGKA_h78rjn.jpg",
      titulo: "Allcot Green Trading ",
      subtitulo: "Empeza el cambio ",
      descripcion: "bla bla bla blab contenido ",
    },
    {
      img: "https://res.cloudinary.com/dbv6dgwez/image/upload/v1644924561/Allcot%20Trading/climate_change_rgdohc.jpg",
      titulo: "Datos de interes ",
      subtitulo: "El futuro de CCB ...",
      descripcion: "bla bla bla",
    },
    {
      img: "https://res.cloudinary.com/dbv6dgwez/image/upload/v1644924561/Allcot%20Trading/climate_change_2_zuwyvb.png",
      titulo: "Alianzas y Standars",
      subtitulo: "Conoce las estrategia",
      descripcion: "bla bla bla contenido ",
    },
    {
      img: "https://res.cloudinary.com/dbv6dgwez/image/upload/v1644924561/Allcot%20Trading/imagen_4_jougrz.jpg",
      titulo: "DESCUBRE LO QUE VIENE",
      subtitulo: "Posicion en Mercado ",
      descripcion: "Bla bla bla bl",
    },
    {
      img: "https://res.cloudinary.com/dbv6dgwez/image/upload/v1644924561/Allcot%20Trading/sustentabilidad_3_h4brlm.jpg",
      titulo: "GS-VSC-CDM ",
      subtitulo: "Todo lo que necesitas",
      descripcion: "bla bla bla bla bla blab ",
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
          <PreguntasFrecuentes/>
        </Container>
      </div>
    </>
  );
}

export default Home;
