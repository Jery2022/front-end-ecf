import { useState } from 'react';
import { Form, Image, Button, FloatingLabel, Col, Row } from 'react-bootstrap';
import Logo from '../assets/images/logo/V-Parrot-logo.png';
import Footer from './Footer';
import './css/SendMessage.css';

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
      <main>
        <section className="container-fluid p-0 my-0 text-white px-2">
          <h2>Envoyer-nous un message</h2>
          <div className="wrapper-message">
            <Image className="wrapper-logo" src={Logo} alt="image" />
            <Form>
              <Row>
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
            <br />
            <Col sm="12" md="12" xl="12">
              <Form>
                <Form.Floating className="mb-3 ">
                  <Form.Control
                    id="floatingInputCustom"
                    type="email"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInputCustom">Email address</label>
                </Form.Floating>
                <br />
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Commentaires"
                  className="mb-3 w-100"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Saisissez votre commentaires ici..."
                    style={{ height: '100px' }}
                  />
                </FloatingLabel>
              </Form>
            </Col>
            <br />
            <Button
              type="submit"
              onSubmit={handleSubmit}
              variant="outline-warning"
            >
              Envoyer
            </Button>
            <br />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
