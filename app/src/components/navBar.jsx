import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBarSite = () => (
  <Navbar fixed="top">
    <Navbar.Brand
      href="#"
      style={{ color: 'white' }}
      className="visible-lg-*"
    >
      <img
        src={`${process.env.PUBLIC_URL}/assets/logo/logo.png`}
        height="70"
        className="d-inline-block align-center mr-2"
        alt="logo VDH"
      />
      LA VOIE DU HOUBLON
    </Navbar.Brand>
    <Nav className="ml-auto mx-a">
      <Nav.Link href="./#">Accueil</Nav.Link>
      <Nav.Link href="./#quisommenous">Qui sommes nous</Nav.Link>
      <Nav.Link href="./#maispasque">L'association parrainée</Nav.Link>
      <Nav.Link href="./#infopratiques">Infos Pratiques</Nav.Link>
      <Nav.Link href="./#galerie">Photos</Nav.Link>
    </Nav>

    <Nav className="ml-auto">
      <Nav.Link href="https://assos.utc.fr/woolly/ventes/102">
        <i
          className="fa fa-shopping-cart"
          style={{ paddingRight: '10px' }}
        />
        Billetterie
      </Nav.Link>
    </Nav>
  </Navbar>
);

export default NavBarSite;
