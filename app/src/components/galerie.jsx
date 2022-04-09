import React from "react";
import { Row, Col, Image, Button, Container } from "react-bootstrap";
import Bloc from "./bloc";

class Galerie extends React.Component {
  render() {
    return (
      <Bloc style={{ paddingLeft: "2rem", paddingRight: "2rem" }} id="galerie">
        <h1 className="my-3">
          <strong>GALERIE PHOTO</strong>
        </h1>
        <p className="text-dark mb-5">
          Un grand merci aux photographes de{" "}
          <a href="https://assos.utc.fr/picsart/">Pics'Art</a> pour leurs
          photos.
        </p>
        <Container fluid>
          <Row>
            <Col className="mx-0 px-0 image-galerie-container">
              <Image
                src={process.env.PUBLIC_URL + "/assets/galerie/1.jpg"}
                alt="photo coureur"
                className="w-100 h-100 image-galerie"
                thumbnail
              />
            </Col>
            <Col className="mx-0 px-0 image-galerie-container">
              <Image
                src={process.env.PUBLIC_URL + "/assets/galerie/2.jpg"}
                alt="photo coureur"
                className="w-100 h-100 image-galerie"
                thumbnail
              />
            </Col>
            <Col className="mx-0 px-0 image-galerie-container">
              <Image
                src={process.env.PUBLIC_URL + "/assets/galerie/3.jpg"}
                alt="photo coureur"
                className="w-100 h-100 image-galerie"
                thumbnail
              />
            </Col>
            <Col className="mx-0 px-0 image-galerie-container">
              <Image
                src={process.env.PUBLIC_URL + "/assets/galerie/4.jpg"}
                alt="photo coureur"
                className="w-100 h-100 image-galerie"
                thumbnail
              />
            </Col>
          </Row>
          <Row>
            <Col className="mx-0 px-0 image-galerie-container">
              <Image
                src={process.env.PUBLIC_URL + "/assets/galerie/5.jpg"}
                alt="photo coureur"
                className="w-100 h-100 image-galerie"
                thumbnail
              />
            </Col>
            <Col className="mx-0 px-0 image-galerie-container">
              <Image
                src={process.env.PUBLIC_URL + "/assets/galerie/6.jpg"}
                alt="photo coureur"
                className="w-100 h-100 image-galerie"
                thumbnail
              />
            </Col>
            <Col className="mx-0 px-0 image-galerie-container">
              <Image
                src={process.env.PUBLIC_URL + "/assets/galerie/7.jpg"}
                alt="photo coureur"
                className="w-100 h-100 image-galerie"
                thumbnail
              />
            </Col>
            <Col className="mx-0 px-0 image-galerie-container">
              <Image
                src={process.env.PUBLIC_URL + "/assets/galerie/8.jpg"}
                alt="photo coureur"
                className="w-100 h-100 image-galerie"
                thumbnail
              />
            </Col>
          </Row>
          <Row>
            <Col className="mx-0 px-0 image-galerie-container">
              <Image
                src={process.env.PUBLIC_URL + "/assets/galerie/9.jpg"}
                alt="photo coureur"
                className="w-100 h-100 image-galerie"
                thumbnail
              />
            </Col>
            <Col className="mx-0 px-0 image-galerie-container">
              <Image
                src={process.env.PUBLIC_URL + "/assets/galerie/10.jpg"}
                alt="photo coureur"
                className="w-100 h-100 image-galerie"
                thumbnail
              />
            </Col>
            <Col className="mx-0 px-0 image-galerie-container">
              <Image
                src={process.env.PUBLIC_URL + "/assets/galerie/11.jpg"}
                alt="photo coureur"
                className="w-100 h-100 image-galerie"
                thumbnail
              />
            </Col>
            <Col className="mx-0 px-0 image-galerie-container">
              <Image
                src={process.env.PUBLIC_URL + "/assets/galerie/12.jpg"}
                alt="photo coureur"
                className="w-100 h-100 image-galerie"
                thumbnail
              />
            </Col>
          </Row>
          <Row>
            <Col className="mx-0 px-0 image-galerie-container">
              <Image
                src={process.env.PUBLIC_URL + "/assets/galerie/13.jpg"}
                alt="photo coureur"
                className="w-100 h-100 image-galerie"
                thumbnail
              />
            </Col>
            <Col className="mx-0 px-0 image-galerie-container">
              <Image
                src={process.env.PUBLIC_URL + "/assets/galerie/14.jpg"}
                alt="photo coureur"
                className="w-100 h-100 image-galerie"
                thumbnail
              />
            </Col>
            <Col className="mx-0 px-0 image-galerie-container">
              <Image
                src={process.env.PUBLIC_URL + "/assets/galerie/15.jpg"}
                alt="photo coureur"
                className="w-100 h-100 image-galerie"
                thumbnail
              />
            </Col>
            <Col className="mx-0 px-0 image-galerie-container">
              <Image
                src={process.env.PUBLIC_URL + "/assets/galerie/16.jpg"}
                alt="photo coureur"
                className="w-100 h-100 image-galerie"
                thumbnail
              />
            </Col>
          </Row>
        </Container>
        <div className="my-4">
          <Button
            variant="success"
            href="https://www.facebook.com/valentine.deschamps.347/media_set?set=a.889647507903825&type=1&l=cb556a68bf"
          >
            Voir plus de photos
          </Button>
        </div>
      </Bloc>
    );
  }
}

export default Galerie;
