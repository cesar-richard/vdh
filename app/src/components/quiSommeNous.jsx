import React from 'react';
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';
import Bloc from './bloc';

const QuiSommeNous = () => (
  <Bloc id="quisommenous">
    <div className="mb-5">
      <img
        className="w-25 h-25"
        src={`${process.env.PUBLIC_URL}/assets/logo/logo_horizontal.png`}
        alt="logo vdh"
      />
      <h2>
        <strong>
          QU'EST CE QUE
          <span className="title-quisommesnous">LA VOIE DU HOUBLON </span>
          ?
        </strong>
      </h2>
    </div>
    <Container fluid>
      <Row
        style={{
          backgroundColor: '#f5f5f5',
          height: '100%',
        }}
      >
        <Col className="mt-auto mb-auto p-4 text-quisommesnous">
          <p>
            La voie du houblon est une
            <strong> course caritative et festive </strong>
            ouverte à tous d'une longueur
            de 10km.
            Elle reliait anciennement les villes de Compiègne et Saint-Sauveur (à La Cauette à Bières)
            mais relie les villes de
            <strong> Compiègne et d’Armancourt </strong>
            .
            Elle se déroulera cette année le
            <strong> samedi 14 mai 2022 </strong>
            .
          </p>
          <p>
            Il est tout à fait possible de parcourir les 10 km en courant, en marchant, mais aussi en rollers,
            en trottinette, en skateboard et même en caddie pour les plus téméraires d'entre vous.
            Le parcours sera ponctué de 4 stands sur lesquels seront proposées des
            <strong> dégustations de bières. Des softs, de l'eau et de la nourriture </strong>
            seront aussi mis à la disposition des participants.
            <strong> De nombreuses animations ainsi que des défis </strong>
            seront mis en place sur la totalité du
            parcours.
            L'objectif est de proposer un circuit mêlant course et randonnée, sport et détente,
            compétition et convivialité.
          </p>
          <p>
            A l’arrivée, les participants pourront profiter de concerts, de bières mises en vente et de nourriture.
            Le retour vers Compiègne sera assuré par des navettes.
          </p>
          <div className="button-quisommesnous my-3">
            <Button
              className="mt-5 button-quisommesnous"
              variant="success"
              href="/moreInfos"
            >
              En savoir plus
            </Button>
          </div>
        </Col>
        <Col className="px-0 my-auto">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title="video"
              src="https://www.youtube-nocookie.com/embed/-wHaHFHf1aA"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              className="w-100 h-100 embed-responsive-item"
            />
          </div>
        </Col>
      </Row>
    </Container>
  </Bloc>
);

export default QuiSommeNous;
