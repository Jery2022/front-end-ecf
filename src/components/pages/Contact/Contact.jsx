import React from 'react';
import { useState } from 'react';
import { Form, Image } from 'react-bootstrap';
import './Contact.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../assets/images/logo/V-Parrot-logo.png';

export default function Contact() {
  const [inputs, setInputs] = useState({});
  let navigate = useNavigate();

  const handleChange = (event) => {
    const fname = event.target;
    const value = event.target;
    setInputs((inputs) => ({ ...inputs, [fname]: value }));
  };

  const handleClick = (event) => {
    event.preventDefault();
    navigate('/home');
    console.log(inputs);
  };

  return (
    <>
      <article>
        <section className="section-paire">
          <Form className="wrapper-login">
            <h2>Contact</h2>
            <Image className="wrapper-logo" src={Logo} alt="image" />
            <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
              <Form.Label>Email :</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="email"
                placeholder="contact@example.com"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactForm.ControlInput2">
              <Form.Label>Objet :</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                placeholder="Votre objet ici.."
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="contactForm.ControlTextarea1"
            >
              <Form.Label>Message :</Form.Label>
              <Form.Control
                as="textarea"
                onChange={handleChange}
                rows={3}
                required
              />
            </Form.Group>
            <br />
            <button type="button" onClick={handleClick} className="My-Button">
              Envoyer
            </button>
            <button type="button" onClick={handleClick} className="My-Button">
              Annuler
            </button>
            <br />
          </Form>
        </section>
      </article>
    </>
  );
}
