import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import Bloc from "./bloc";
class Partenaire extends React.Component {
  render() {
    return (
      <Bloc color="rgb(245, 245, 245)">
        <div className="mb-4">
          <h2 className="my-2">
            <strong>NOS PARTENAIRES</strong>
          </h2>
          <p className="text-dark">
            Qui nous offrent leur soutien pour réaliser cette course
          </p>
        </div>
        <Container fluid>
          <Row className="p-3">
            <Col className="image-partenaire-container bg-white">
              <Image
                src={process.env.PUBLIC_URL + "/assets/partenaires/bde.jpg"}
                alt="photo partenaire"
                className="w-100 image-galerie"
              />
            </Col>
            <Col className="image-partenaire-container bg-white">
              <Image
                src={process.env.PUBLIC_URL + "/assets/partenaires/esn.png"}
                alt="photo partenaire"
                className="w-100 image-galerie"
              />
            </Col>
            <Col className="image-partenaire-container bg-white">
              <Image
                src={process.env.PUBLIC_URL + "/assets/partenaires/utc.png"}
                alt="photo partenaire"
                className="w-100 image-galerie"
              />
            </Col>
            <Col className="image-partenaire-container bg-white">
              <Image
                src={process.env.PUBLIC_URL + "/assets/partenaires/france3.png"}
                alt="photo partenaire"
                className="w-100 image-galerie"
              />
            </Col>
            <Col className="image-partenaire-container bg-white">
              <Image
                src={process.env.PUBLIC_URL + "/assets/partenaires/pvdc.png"}
                alt="photo partenaire"
                className="w-100 image-galerie"
              />
            </Col>
          </Row>
          {/* <Row className="p-3">
            <Col className="image-galerie-container my-auto">
              <Image
                src={process.env.PUBLIC_URL + "/assets/partenaires/fsc.png"}
                alt="photo partenaire"
                className="image-galerie"
                thumbnail
              />
            </Col>
            <Col className="image-galerie-container my-auto">
              <Image
                src={process.env.PUBLIC_URL + "/assets/partenaires/ssp.png"}
                alt="photo partenaire"
                className="image-galerie"
                thumbnail
              />
            </Col>
            <Col className="image-galerie-container my-auto">
              <Image
                src={process.env.PUBLIC_URL + "/assets/partenaires/larsen.png"}
                alt="photo partenaire"
                className="image-galerie"
                thumbnail
              />
            </Col>
            <Col className="image-galerie-container my-auto">
              <Image
                src={process.env.PUBLIC_URL + "/assets/partenaires/cet.png"}
                alt="photo partenaire"
                className="image-galerie"
                thumbnail
              />
            </Col>
            <Col className="image-galerie-container my-auto">
              <Image
                src={process.env.PUBLIC_URL + "/assets/partenaires/arc.png"}
                alt="photo partenaire"
                className="image-galerie"
                thumbnail
              />
            </Col>
          </Row>
          <Row className="p-3">
            <Col className="image-galerie-container my-auto">
              <Image
                src={process.env.PUBLIC_URL + "/assets/partenaires/cauette.png"}
                alt="photo partenaire"
                className="image-galerie"
                thumbnail
              />
            </Col>
            <Col className="image-galerie-container my-auto">
              <Image
                src={
                  process.env.PUBLIC_URL + "/assets/partenaires/decibels.png"
                }
                alt="photo partenaire"
                className="image-galerie"
                thumbnail
              />
            </Col>
            <Col className="image-galerie-container my-auto">
              <Image
                src={process.env.PUBLIC_URL + "/assets/partenaires/ariane.png"}
                alt="photo partenaire"
                className="image-galerie"
                thumbnail
              />
            </Col>
            <Col className="image-galerie-container my-auto">
              <Image
                src={
                  process.env.PUBLIC_URL + "/assets/partenaires/secourut.png"
                }
                alt="photo partenaire"
                className="image-galerie"
                thumbnail
              />
            </Col>
            <Col className="image-galerie-container my-auto">
              <Image
                src={process.env.PUBLIC_URL + "/assets/partenaires/soge.jpg"}
                alt="photo partenaire"
                className="image-galerie"
                thumbnail
              />
            </Col>
          </Row> */}
        </Container>
      </Bloc>
    );
  }
}

export default Partenaire;
