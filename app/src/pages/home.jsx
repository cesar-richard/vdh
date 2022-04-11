import React from 'react';
import Header from '../components/header';
import InfoPratique from '../components/infoPratique';
import QuiSommeNous from '../components/quiSommeNous';
import MaisPasQue from '../components/maisPasQue';
import Galerie from '../components/galerie';
import Partenaire from '../components/partenaire';

const HomePage = () => (
  <div className="container-fluid mx-0 px-0">
    <Header />
    <QuiSommeNous />
    <InfoPratique />
    <MaisPasQue />
    <Galerie />
    <Partenaire />
  </div>
);

export default HomePage;
