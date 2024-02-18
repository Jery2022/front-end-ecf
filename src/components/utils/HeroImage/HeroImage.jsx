import { React } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../../index.css';
import './HeroImage.css';

export default function HeroImage() {
  const navigate = useNavigate();
  function handleGoHome() {
    navigate('/home');
  }
  return (
    <Row
      className="hero-image 
    "
    >
      <Col
        xs={12}
        md={6}
        xl={4}
        className="hero-text
         "
      >
        <h1>Bienvenue au Garage V. Parrot</h1>
        <p>
          Nous sommes ravis de vous accueillir ici, où vous trouverez toutes les
          informations nécessaires pour prendre soin de vos véhicules, les
          réparer et les rénover, peu importe leur durée de vie et leur modèle.
        </p>
        <button
          className="My-Button"
          onClick={handleGoHome}
          style={{
            type: 'button ',
            marginLeft: 'auto',
            marginRight: 'auto',
            justifyContent: 'center',
          }}
        >
          En savoir plus...
        </button>
      </Col>
    </Row>
  );
}
