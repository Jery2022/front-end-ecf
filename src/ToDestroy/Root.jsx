//import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Root() {
  return (
    <>
      <header>
        <Navbar
          data-bs-theme="dark"
          expand="lg"
          sticky="top"
          className=" bg-body-tertiary"
        >
          <Container fluid className="d-flex justify-content-between">
            <Navbar.Brand href="#home">
              <img
                alt="Logo"
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
                variant="underline"
                defaultActiveKey="/home"
                as="ul"
                navbarScroll
              >
                <Nav.Item as="li">
                  <Nav.Link eventKey="/home">Accueil</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href={`/about`}>A propos</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="/services">Services</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="/gallery">Galérie</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="/contact">Contact</Nav.Link>
                </Nav.Item>
              </Nav>

              <Form className="d-flex p-2">
                <Button variant="outline-success">Connexion</Button>
              </Form>
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
    </>
  );
}
