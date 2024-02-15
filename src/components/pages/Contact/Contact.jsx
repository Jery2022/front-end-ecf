import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Contact.css';

export default function Contact() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const fname = event.target;
    const value = event.target;
    setInputs((inputs) => ({ ...inputs, [fname]: value }));
  };

  const handleClick = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <>
      <article>
        <section className="container-fluid p-0 my-0 text-white">
          <h2>Contact</h2>
          <Form className="wrapper-login">
            <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="email"
                placeholder="contact@example.com"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="contactForm.ControlTextarea1"
            >
              <Form.Label>Message :</Form.Label>
              <Form.Control as="textarea" onChange={handleChange} rows={3} />
            </Form.Group>
            <br />
            <Button type="button" onClick={handleClick} className="My-Button">
              Envoyer
            </Button>
            <Button type="button" onClick={handleClick} className="My-Button">
              Annuler
            </Button>
            <br />
          </Form>
        </section>
      </article>
    </>
  );
}
