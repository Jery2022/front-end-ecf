//import * as bootstrap from 'bootstrap';
import { React } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Form } from 'react-bootstrap';
import { FaHome, FaPhone } from 'react-icons/fa';
import { FaGears, FaImages, FaRegLightbulb } from 'react-icons/fa6';
import ButtonLogin from '../services/routes/ButtonLogin';
import logo from '../../assets/images/logo/V-Parrot-logo.png';

function HeaderPage() {
  return (
    <header>
      <Navbar expand="lg" sticky="top" className=" navbar-bg  shadow ">
        <Container fluid className="d-flex justify-content-around ">
          <Navbar.Brand href="/">
            <img
              alt="Logo"
              src={logo}
              width="50"
              height="50"
              className="d-inline-block  align-middle"
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
            <Form
              className="d-flex  
              ButtonLogin 
              "
            >
              <ButtonLogin />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default HeaderPage;
