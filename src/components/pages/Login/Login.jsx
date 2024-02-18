import React, { useState /*useEffect */ } from 'react';
import { Form, Image, Alert } from 'react-bootstrap';
import Logo from '../../../assets/images/logo/V-Parrot-logo.png';
import '../../../index.css';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [error, setError] = useState(null);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePasseword = (event) => {
    setPassword(event.target.value);
  };

  console.log(`votre email est ${email} et 
  votre mot de passe est ${password}`);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https:/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Identifiant ou mot de passe incorrect');
        }
      })
      .then((data) => {
        localStorage.setItem('token', data.token);
        console.log(data);
        //window.location = '/dashboard';
      })
      .catch((error) => {
        //setError(error.message);
        Alert(error);
      });

    let pseudo = email.slice(0, email.indexOf('@'));
    console.log(pseudo);

    setPassword('');
    setEmail('');
  };

  return (
    <>
      <section className="container-fluid  section-paire">
        <Form className="wrapper-login">
          <h2>Connexion</h2>
          <Image className="wrapper-logo" src={Logo} alt="image" />
          <Form.Floating className="mb-3 w-100">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={handleChangeEmail}
              required
            />
            <label htmlFor="floatingInputCustom">Email address</label>
          </Form.Floating>
          <Form.Floating className="mb-3 w-100">
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleChangePasseword}
              required
            />
            <label htmlFor="floatingPasswordCustom">Password</label>
          </Form.Floating>
          <br />
          <button variant="link" className="Link-App">
            Mot de passe oublié ? Cliquez ici !
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="My-Button 
          "
            style={{
              width: '220px',
              justifyContent: 'center',
            }}
          >
            Connexion
          </button>
          <br />
        </Form>
      </section>
    </>
  );
}
