import React, { useEffect } from "react";
import {Col,Container,Image,Nav,Row,Tab,TabContent,} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./collectionTable.css";
// Imports Effect to scroll down
import Aos from "aos";
import "aos/dist/aos.css";

const scrollToTop = () => {
  window.scrollTo(0, 250);
};


const CollectionTable = () => {

   // Efecto para scroll down 
   useEffect(() => {
    Aos.init({ duration: 2500 });
  }, [])

  return (
    <div>
      <Container className="text-center">
        <h3 data-aos="fade-up" className="collection-tilulo ">¿Por Que Allcot Trading?</h3>
        <Tab.Container  id="left-tabs-example" defaultActiveKey="first">
          <Row data-aos="fade-up" className="mt-5 ">
            <Col sm={3} className="p-0 col-sm-12 col-xl-3">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link className="tab-itemStyle d-flex" eventKey="first">
                    ALIADOS CLAVES
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="tab-itemStyle d-flex" eventKey="second">
                    ENTENDEMOS LOS STANDARS
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="tab-itemStyle d-flex" eventKey="third">
                    MERCADO INTERNACIONAL
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="tab-itemStyle d-flex" eventKey="quarter">
                    TRADERS INTELIGENTES 
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={3} className="p-0 col-sm-12 col-xl-9">
              <Tab.Content>
                <Tab.Pane className="tab-transition" eventKey="first">
                  <TabContent />
                  <Row className="tab-responsive d-flex flex-wrap">
                    <Col className="col-12 p-0 col-sm-12 col-xl-6">
                      <Image
                        src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1644867229/Allcot%20Trading/sustainable-world_qflbwu.jpg"
                        fluid
                      />
                    </Col>
                    <Col className="p-5 col col-estilo col-sm-12 col-xl-6">
                      <h3 className="mt-4">Inbound Sales</h3>
                      <p className="mt-5 pt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate hic, iste adipisci laborum voluptates ad sunt enim maxime incidunt soluta aut dolore sint, consequuntur nam veritatis unde consequatur reprehenderit et!
                      </p>
                      <button as={NavLink} to="/" onClick={scrollToTop} className="btn-general-style mt-5">
                        VER 
                      </button>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane className="tab-transition" eventKey="second">
                  <TabContent />
                  <Row className="tab-responsive d-flex flex-wrap">
                    <Col className="col-12 p-0 col-sm-12 col-xl-6">
                      <Image
                        src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1644867228/Allcot%20Trading/business_ehcrsj.png"
                        fluid
                      />
                    </Col>
                    <Col className="p-5 col-estilo">
                      <h3 className="mt-4">Apuesta por el cambio</h3>
                      <p className="mt-5 pt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos asperiores cupiditate odit quia ipsam in labore ex id vitae nisi, accusamus illo ducimus. Eligendi illo, dicta neque officiis repellat odit?
                      </p>
                      <button as={NavLink} to="/" onClick={scrollToTop} className="btn-general-style mt-5">
                        VER 
                      </button>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane className="tab-transition" eventKey="third">
                  <TabContent />
                  <Row className="tab-responsive d-flex flex-wrap">
                    <Col className="col-12 p-0 col-sm-12 col-xl-6">
                      <Image
                        src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1644867373/Allcot%20Trading/Logo_3_sfmddl.png"
                        fluid
                      />
                    </Col>
                    <Col className="p-5 col-estilo">
                      <h3 className="mt-4">Mercado internacional</h3>
                      <p className="mt-5 pt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores voluptatum reiciendis odio quae, odit minus ipsa tenetur doloribus cumque facere! Minima eligendi voluptatem quo possimus incidunt at beatae nisi.
                      </p>
                      <button as={NavLink} to="/" onClick={scrollToTop} className="btn-general-style mt-5">
                        VER 
                      </button>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane className="tab-transition" eventKey="quarter">
                  <TabContent />
                  <Row className="tab-responsive d-flex flex-wrap">
                    <Col className="col-12 p-0 col-sm-12 col-xl-6">
                      <Image
                        src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1644867229/Allcot%20Trading/stock-photo-venn-diagram-green-flat-design-long-shadow-glyph-icon-overlapping-circles-intertwined-graph-sections-with-indexes-marketing-presentation-business-visualization-vector-silhouet_fh14ol.jpg"
                        fluid
                      />
                    </Col>
                    <Col className="p-5 col-estilo">
                      <h3 className="mt-4">¿Donde conviene?</h3>
                      <p className="mt-5 pt-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At mollitia explicabo temporibus harum ex quod tenetur voluptate cum voluptatum minima earum, nesciunt sequi vel quia in deserunt voluptates possimus illum.
                      </p>
                      <button as={NavLink} to="/" onClick={scrollToTop} className="btn-general-style mt-5">
                        VER 
                      </button>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default CollectionTable;
