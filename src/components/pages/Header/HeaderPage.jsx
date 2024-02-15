import { React } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaHome, FaPhone } from 'react-icons/fa';
import { FaGears, FaImages, FaRegLightbulb } from 'react-icons/fa6';
import styled from 'styled-components';
import ButtonLogin from '../../services/ButtonLogin';
import logo from '../../../assets/images/logo/V-Parrot-logo.png';

const FormNav = styled.form`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 5px;
  gap: 20px;
  width: 55%;
  height: 100%;
  :hover {
    background-color: #555;
    color: white;
    height: 45px;
  }

  @media (min-width: 376px) {
    display: flex;
    direction: column;
    align-items: center;
    justify-content: beteween;
    width: 100%;
    margin: 10px 0px;
    :hover {
      background-color: #red;
      color: white;
      height: 40px;
    }
  }
`;

const Lang = styled.div`
  font-family: 'Roboto', sans-serif;
  position: relative;
  right: 1vw;
  font-size: 0.8rem;
  background-color: #233333;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 2px auto;
  margin: 0 5px;
  width: 15%;
  color: white;
  cursor: pointer;
  span {
    margin: 10px 3px;
  }
  :hover {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffa500;
    color: #555;
    padding: 3px;
  }

  @media (min-width: 376px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2px;
  }
`;

function HeaderPage() {
  return (
    <header>
      <Navbar expand="lg" sticky="top" className=" navbar-bg shadows   ">
        <Container fluid className="d-flex justify-content-space-between ">
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

            <FormNav>
              <ButtonLogin />
              <Lang>
                <span>FR</span> - <span>EN</span>
              </Lang>
            </FormNav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default HeaderPage;
