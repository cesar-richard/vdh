import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

class Footer extends React.Component {
  render() {
    return (
      <Container
        fluid
        style={{
          backgroundColor: "rgb(03, 66, 35)",
          color: "white",
          marginTop: "auto",
          position: "absolute",
          left: "0",
          bottom: "-10000",
          right: "0",
          paddingTop: "2rem",
          paddingBottom: "1rem"
        }}
      >
        <Row className="mx-5 px-5 pb-3 align-center footer">
          <Col>
            <h3>Navigation :</h3>
          </Col>
          <Col>
            <h3>Nous contacter :</h3>
          </Col>
          <Col>
            <h3>Nous suivre :</h3>
          </Col>
        </Row>
        <Row className="mx-5 px-5 align-center footer">
          <Col>
            <ul>
              <li>
                <Nav.Link href="./#">Accueil</Nav.Link>
              </li>
              <li>
                <Nav.Link href="https://assos.utc.fr/woolly/ventes">
                  Billeterie
                </Nav.Link>
              </li>
              <li>
                <Nav.Link href="./#quisommenous">Notre Association</Nav.Link>
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>
                <a href="mailto:lavoieduhoublon@assos.utc.fr">
                  lavoieduhoublon@assos.utc.fr
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <Row className="align center">
              <Col></Col>
              <Col className="">
                <a href={process.env.PUBLIC_URL + "/#"}>
                  <i className="fa fa-envelope fa-2x"></i>
                </a>
              </Col>
              <Col className="mr-auto">
                <a href="https://www.facebook.com/Voie-Du-Houblon-961462067220969/">
                  <i className="fa fa-facebook fa-2x"></i>
                </a>
              </Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>
        <div>
          <p>
            © 2022 LA VOIE DU HOUBLON, ALL RIGHTS RESERVED,
            <a
              href={
                process.env.PUBLIC_URL + "/assets/pdf/mentions-legales-vdh.pdf"
              }
            >
              Mentions legales
            </a>
            {/* <a href={process.env.PUBLIC_URL + "/assets/pdf/CGV.pdf"}>
              CONDITIONS GÉNÉRALES D'UTILISATION
            </a> */}
          </p>
        </div>
      </Container>
    );
  }
}

export default Footer;
