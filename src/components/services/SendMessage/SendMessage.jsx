import { useState } from 'react';
import { Form, Image, Button, FloatingLabel, Col } from 'react-bootstrap';
import Logo from '../../../assets/images/logo/V-Parrot-logo.png';
import './SendMessage.css';
import styled from 'styled-components';

const DivSendMessage = styled.div`
  
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 0;
  .wrapper-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    .wrapper-box {
      width: 100%;
      margin: 5px 5px;

    }
  }
  .wrapper-message {
    gap: 10px;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  h2 {
    font-size: 2rem;
    font-weight: 900;
    font-family: 'Roboto', sans-serif;
    color: #ffa500;
    text-align: center;
  }

  .wrapper-logo {
    margin: 0 auto;
    width: 50%;
    height: 50%;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .wrapper-message {
      gap: 5px;
      width: 100%;
      padding: 0;
      margin: 0;
    }
    .My-Button {
      width: 100%;
    }
  }

  @media (min-width: 376px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .wrapper-row {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 10px;
      .wrapper-box {
        width: 100%;
        margin: 2px 5px;
      }

    .wrapper-message {
      width: 100%;
      padding: 0;
      margin: 0;
    }
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

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <>
      <DivSendMessage className="container-fluid   ">
        <h2>Envoyer-nous un message</h2>
        <Image className="wrapper-logo" src={Logo} alt="image" />
        <div className="wrapper-message px-2">
          <Form>
            <div className="wrapper-row">
              <div className="wrapper-box">
                <Form.Label>Prénom :</Form.Label>
                <Form.Control
                  value={inputs.lastname || ''}
                  onChange={handleChange}
                  placeholder="Votre prénom"
                />
              </div>
              <div className="wrapper-box">
                <Form.Label>Nom :</Form.Label>
                <Form.Control
                  value={inputs.firstname || ''}
                  onChange={handleChange}
                  placeholder="Votre nom"
                />
              </div>
            </div>
          </Form>
          <Col sm="12" md="3" xl="1" className=" w-100">
            <Form>
              <Form.Floating className="mt-3 mb-3">
                <Form.Control
                  id="floatingInputEmail"
                  type="email"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInputEmail">Email address</label>
              </Form.Floating>
              <FloatingLabel
                controlId="floatingTextarea1"
                label="Saisissez votre commentaire ici..."
                className="mb-3 w-100"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Saisissez votre message ici..."
                  style={{ height: '100px' }}
                />
              </FloatingLabel>
            </Form>
          </Col>
          <Button type="submit" onSubmit={handleSubmit} className="My-Button">
            Envoyer
          </Button>
        </div>
      </DivSendMessage>
    </>
  );
}
