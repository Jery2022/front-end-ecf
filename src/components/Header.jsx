
//import * as bootstrap from 'bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
  return (
    <header>
      <Navbar expand="lg" sticky="top"  className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt="Logo Garage V.Parrot"
              src="../logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Garage V.Parrot
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
              <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/about">À Propos</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/gallery">Galérie</Link></li>
                <li><Link to="/login">Connexion</Link></li>
              </ul>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
  );
}
export default  Header;
