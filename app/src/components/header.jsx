import React from 'react';
import { Jumbotron, Carousel } from 'react-bootstrap';

const Header = () => {
  const [select, setSelect] = React.useState(1);

  const handleSelect = (index) => {
    setSelect(index);
  };

  return (
    <Jumbotron id="header">
      <Carousel activeIndex={select} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            src={`${process.env.PUBLIC_URL}/assets/background/basket.jpg`}
            className="image-carousel"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Une course de 10 km</h2>
            <p>à faire en marchant comme en courant</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={`${process.env.PUBLIC_URL}/assets/background/nature.jpg`}
            className="image-carousel"
            alt="Sedond slide"
          />
          <Carousel.Caption>
            <h2>Un parcours le long des bords de l’oise</h2>
            <p>Un tracé de course à l'abri des voitures</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={`${process.env.PUBLIC_URL}/assets/background/bridge.jpg`}
            className="image-carousel"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Des coureurs de tous genres</h2>
            <p>UTcéens comme locaux sont conviés à l'événement</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Jumbotron>
  );
};

export default Header;
