import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../../../index.css';
import './ViewCardCars.css';

function ViewCardCars(props) {
  console.log(props.listArray, props.NumbreOfCars);
  const Array = props.listArray.slice(0, props.NumbreOfCars);

  return (
    <div>
      <Row xs={1} md={2} lg={4} className="g-3">
        {Array.map((myCard, index) => (
          <Col key={index}>
            <Card className="Card-hover" style={{ width: '20rem' }}>
              <Card.Img
                variant="top"
                src={myCard.imagesCar[0].src}
                alt={myCard.imagesCar[0].alt}
              />
              <Card.Body>
                <Card.Title>{myCard.nameCar}</Card.Title>
                <Card.Text>Modèle : {myCard.model}</Card.Text>
                <Card.Text>Année : {myCard.year}</Card.Text>
                <Card.Text>Kilométrage : {myCard.kilometrage}</Card.Text>
                <Card.Text style={{ color: 'chocolate', fontWeight: 'bold' }}>
                  Prix : {myCard.price} euros
                </Card.Text>
              </Card.Body>
              <div className="wrapper-card">
                <button
                  className="My-Button "
                  style={{
                    type: 'button ',
                    width: '130px',
                    justifyContent: 'center',
                  }}
                >
                  Détails...
                </button>
                <button
                  className="My-Button"
                  style={{
                    flexDirection: 'row',
                    type: 'button ',
                    width: '130px',
                    justifyContent: 'center',
                  }}
                >
                  Reservez...
                </button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default ViewCardCars;
