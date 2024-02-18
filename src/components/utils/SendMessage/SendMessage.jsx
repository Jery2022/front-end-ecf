import { useState } from 'react';
import { Form, Image, Button, FloatingLabel, Col, Row } from 'react-bootstrap';
import Logo from '../../../assets/images/logo/V-Parrot-logo.png';
import './SendMessage.css';
import styled from 'styled-components';

const DivSendMessage = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
background-color: #f2f2f2;
border: 2px solid #ccc;
padding: 20px;
margin: 0;
}

h2 {
    font-size: 2rem;
    font-weight: 900;
    font-family: 'Roboto', sans-serif;
    color: #ffa500;
    text-align: center;
  }

@media screen and (min-width: 374px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    My-Button {
      width: 100%;
    }
  }
`;

export default function SendMessage() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const fname = event.target.firstname;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [fname]: value }));
  };

  const handleClick = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <>
      <DivSendMessage className="container-fluid">
        <h2>Envoyer-nous un message</h2>
        <Image
          style={{ width: '200px', height: '200px', margin: '5px auto' }}
          src={Logo}
          alt="Logo V.Parrot"
        />
        <Col>
          <Row
            xs={12}
            md={6}
            lg={1}
            style={{
              padding: '10px',
            }}
          >
            <Form>
              <Row xs={12} md={6} lg={2}>
                <div>
                  <Form.Label>Prénom :</Form.Label>
                  <Form.Control
                    value={inputs.lastname || ''}
                    onChange={handleChange}
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <Form.Label>Nom :</Form.Label>
                  <Form.Control
                    value={inputs.firstname || ''}
                    onChange={handleChange}
                    placeholder="Votre nom"
                  />
                </div>
              </Row>
            </Form>
          </Row>
          <Col>
            <Form
              style={{
                padding: '10px',
              }}
            >
              <div>
                <Form.Floating className="mt-3 mb-3">
                  <Form.Control
                    id="floatingInputEmail"
                    type="email"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInputEmail">Email address</label>
                </Form.Floating>
              </div>
              <div>
                <FloatingLabel
                  controlId="floatingTextarea1"
                  label="Saisissez votre message ici..."
                  className="mb-3 w-100"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Saisissez votre message ici..."
                    style={{ height: '100px' }}
                  />
                </FloatingLabel>
              </div>
            </Form>
          </Col>
          <Button
            type="submit"
            onClick={handleClick}
            className="My-Button w-50 mt-3 mb-3 d-flex align-items-center justify-content-center"
          >
            Envoyer
          </Button>
        </Col>
      </DivSendMessage>
    </>
  );
}
