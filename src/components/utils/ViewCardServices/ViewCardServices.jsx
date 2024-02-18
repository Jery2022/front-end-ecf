import React from 'react';
import { Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { dataServices } from '../../../js/script';

function ViewCardServices() {
  return (
    <>
      {dataServices.map((myCard) => (
        <Card
          key={myCard.id}
          style={{
            width: '50rem',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Card.Img
            src={myCard.myIcon}
            alt="icon"
            style={{
              width: '10rem',
              justifyContent: 'center',
              margin: 'auto',
            }}
          />
          <Card.Body>
            <Card.Title>{myCard.myTypeServices}</Card.Title>
          </Card.Body>

          <ListGroup className="list-group-flush">
            {myCard.myServices.map((item) => (
              <ListGroup.Item>{item.oneService}</ListGroup.Item>
            ))}
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Détail...</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default ViewCardServices;
