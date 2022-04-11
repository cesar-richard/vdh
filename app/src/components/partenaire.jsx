import React from 'react';
import {
  Row, Col, Image, Container,
} from 'react-bootstrap';
import Bloc from './bloc';

const Partenaire = () => (
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
            src={`${process.env.PUBLIC_URL}/assets/partenaires/bde.jpg`}
            alt="photo partenaire"
            className="w-100 image-galerie"
          />
        </Col>
        <Col className="image-partenaire-container bg-white">
          <Image
            src={`${process.env.PUBLIC_URL}/assets/partenaires/utc.png`}
            alt="photo partenaire"
            className="w-100 image-galerie"
          />
        </Col>
        <Col className="image-partenaire-container bg-white">
          <Image
            src={`${process.env.PUBLIC_URL}/assets/partenaires/france3.png`}
            alt="photo partenaire"
            className="w-100 image-galerie"
          />
        </Col>
        <Col className="image-partenaire-container bg-white">
          <Image
            src={`${process.env.PUBLIC_URL}/assets/partenaires/psec.png`}
            alt="photo partenaire"
            className="w-100 image-galerie"
          />
        </Col>
      </Row>
      <Row className="p-3">
        <Col className="image-galerie-container my-auto">
          <Image
            src={`${process.env.PUBLIC_URL}/assets/partenaires/soge.png`}
            alt="photo partenaire"
            className="image-galerie"
            thumbnail
          />
        </Col>
        <Col className="image-galerie-container my-auto">
          <Image
            src={`${process.env.PUBLIC_URL}/assets/partenaires/armancourt.png`}
            alt="photo partenaire"
            className="image-galerie"
            thumbnail
          />
        </Col>
        <Col className="image-galerie-container my-auto">
          <Image
            src={`${process.env.PUBLIC_URL}/assets/partenaires/decathlon.png`}
            alt="photo partenaire"
            className="image-galerie"
            thumbnail
          />
        </Col>
      </Row>
    </Container>
  </Bloc>
);

export default Partenaire;
