//import * as bootstrap from 'bootstrap';
//import { ReactDOM } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap';
import { FaHome, FaPhone } from 'react-icons/fa';
import { FaGears, FaImages, FaRegLightbulb } from 'react-icons/fa6';
import ButtonLogin from '../routes/ButtonLogin';

function Header() {
  return (
    <header>
      <Navbar expand="lg" sticky="top" className=" navbar-bg  shadow ">
        <Container fluid className="d-flex justify-content-around ">
          <Navbar.Brand href="/">
            <img
              alt="Logo"
              src={'../logo.svg'}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Garage V.Parrot
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="underline" as="ul" navbarScroll>
              <Nav.Link as={Link} to="/home" exact>
                <FaHome /> Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                <FaRegLightbulb /> About
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                <FaGears /> Services
              </Nav.Link>
              <Nav.Link as={Link} to="/gallery">
                <FaImages /> Galérie
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                <FaPhone /> Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ width: '200px' }}
            />
            <Button style={{ width: '120px' }} variant="outline-success">
              Search
            </Button>
          </Form>
          <Form className="d-flex p-2">
            <ButtonLogin />
          </Form>
        </Container>
      </Navbar>
    </header>
  );
}
export default Header;
