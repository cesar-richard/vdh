import React from 'react';
import {
  Button, Col, Container, Image, Row,
} from 'react-bootstrap';
import Bloc from './bloc';

const MaisPasQue = () => (
  <Bloc color="rgb(245, 245, 245)" id="maispasque">
    <div className="mb-5">
      <h2>
        <strong>UNE COURSE MAIS PAS QUE ...</strong>
      </h2>
      <h5>Un évenement mêlant festif sportif et caritatif</h5>
    </div>
    <Container fluid>
      <Row
        style={{
          height: '100%',
        }}
      >
        <Col className="px-0 my-auto">
          <img
            className="w-100 h"
            src={`${process.env.PUBLIC_URL}/assets/background/benevole.jpg`}
            alt="coureur"
          />
        </Col>
        <Col className="mt-auto mb-auto px-4 text-quisommesnous">
          <div className="text-center align-center">
            <Image
              src={`${process.env.PUBLIC_URL}/assets/partenaires/ariane.jpg`}
              alt="Fil d'ariane"
              className="text-center"
              thumbnail
            />
          </div>
          <p>
            Comme chaque année, tous les bénéfices récoltés seront
            intégralements reversés à une association.
          </p>
          <p>
            Cette année comme l'année dernière, l'association parrainée est
            Le fil d'Ariane. Cette association soutient et aide les
            personnes malvoyantes et aveugles. Agréée depuis 1989, elle est
            implantée en Picardie.
          </p>
          <p>
            Elle accompagne les "nouveaux aveugles" pour les aider à
            s'accomoder à leur cécité, en mettant à leur disposition un
            soutien psycologique. Elle organise également des activités
            gratuites pour favoriser l'ouverture aux autres et divertir les
            malvoyants. Ces nombreuses activités permetent d'accompagner au
            mieux les malvoyants et leur entourge.
          </p>
          <div className="button-quisommesnous mt-5">
            <Button
              className="button-quisommesnous mt-5"
              variant="success"
              href="https://fr-fr.facebook.com/pages/category/Social-Service/Fil-dAriane-358007894961003/"
            >
              En savoir plus sur l'association parrainée
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  </Bloc>
);

export default MaisPasQue;
