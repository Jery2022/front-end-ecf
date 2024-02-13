import { React } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './css/HeroImage.css';

export default function Heroe() {
  return (
    <Row
      className=" hero-image 
      justify-content-center 
       expand-lg
    "
    >
      <Col
        xs={12}
        md={6}
        xl={4}
        xxl={3}
        className="hero-text
         "
      >
        <h1>Bienvenue au Garage V. Parrot</h1>
        <p>
          Nous sommes ravis de vous accueillir ici, où vous trouverez toutes les
          informations nécessaires pour prendre soin de vos véhicules, les
          réparer et les rénover, peu importe leur durée de vie et leur modèle.
        </p>
        <Button
          className="MyButton  "
          style={{
            width: '220px',
            marginLeft: '25%',
          }}
        >
          En savoir plus...
        </Button>
      </Col>
    </Row>
  );
}
