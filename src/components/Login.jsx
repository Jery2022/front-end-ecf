import { Form, Button } from 'react-bootstrap';
import Footer from './Footer';
//import Header from './Header';
import './css/Login.css';

export default function Login() {
  return (
    <>
      <main>
        <div className="login-page">
          <img
            className="background-image"
            src="chemin/vers/l/image.jpg"
            alt="Voiture en réparation"
          />
          <div className="login-container">
            <img
              className="background-logoLogin"
              src="chemin/vers/l/image.jpg"
              alt="Logo login"
            />
            <h2>Login</h2>
            <Form>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Mot de passe" />
              <Button type="submit" variant="outline-success">
                Se connecter
              </Button>
            </Form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
