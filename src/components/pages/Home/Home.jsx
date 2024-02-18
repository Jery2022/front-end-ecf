import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Image, Row, Card, ListGroup } from 'react-bootstrap';
import { FaCalendarDays } from 'react-icons/fa6';
import { FaCircleCheck } from 'react-icons/fa6';
import { FaHeadset } from 'react-icons/fa6';
import { FaRegClock } from 'react-icons/fa6';
import { VscLocation } from 'react-icons/vsc';
import { listCars } from '../../../assets/datas/cars.datas.js';
import { dataServices } from '../../../assets/datas/services.datas.js';
import { listTestimonials } from '../../../assets/datas/testimonials.datas.js';
import { dataSkills } from '../../../assets/datas/skills.datas.js';
import AdressInfo from '../../utils/AdressInfo/AdressInfo';
import ViewInfo from '../../utils/ViewInfo/ViewInfo';
import ViewCardCars from '../../utils/ViewsCardCars/ViewCardCars';
import SendMessage from '../../utils/SendMessage/SendMessage';
import ViewCardSkills from '../../utils/ViewCardSkills/ViewCardSkills';
import car from '../../../assets/images/cars/Chevrolet_camero2017_1.jpg';
import './Home.css';
import '../../../index.css';

export default function Home() {
  const length = 4;
  let navigate = useNavigate();

  const handelClick = () => {
    console.log('click');
    navigate('/contact');
  };

  const handelClickCars = () => {
    console.log('click');
    navigate('/gallery');
  };
  return (
    <>
      <article className="container-fluid">
        <section className="section-paire">
          <Row className="slogan">
            <h2>Nous nous engageons à vous fournir un service de qualité</h2>
          </Row>
          <Row>
            <div className="section-title">Nos Engagments</div>
            <Col xs={12} md={6} xl={4} style={{ marginBottom: '50px' }}>
              <div
                className="wrapper-card-info"
                style={{ fontWeight: 'bold ' }}
              >
                <ViewInfo
                  MyIcon1={<FaCalendarDays />}
                  MyTitle={'| PRENEZ UN RDV'}
                  MyIcon2={<FaHeadset />}
                  MyNumberPhone={'| 066 33 56 44 56'}
                  MyEmail={'Email | v-parrot@example.com'}
                  MyAdress={
                    <AdressInfo
                      nameSiege=" Siège social"
                      nameVille="Ile de France"
                      nameAdress="34, Quai des Exemples 75004 Paris"
                    />
                  }
                />
              </div>
            </Col>
            <Col xs={12} md={6} xl={4} style={{ marginBottom: '50px' }}>
              <div
                className="
                  wrapper-card-info"
                style={{ fontWeight: 'bold ' }}
              >
                <p>
                  <FaRegClock /> <b>HEURES D'OUVERTURE</b>
                </p>
                <p>
                  <FaCircleCheck /> : Lundi - Samedi : 8h - 18h30
                </p>
                <p>
                  <FaCircleCheck /> : Dimanche : Fermé
                </p>
                <div>
                  <br />
                  <button
                    className="My-Button  m-auto"
                    style={{ width: '220px' }}
                    onClick={handelClick}
                  >
                    Contactez-nous !
                  </button>
                </div>
              </div>
            </Col>

            <Col xs={12} md={6} xl={4} style={{ marginBottom: '50px' }}>
              <div
                className="wrapper-card-info"
                style={{ fontWeight: 'bold ' }}
              >
                <ViewInfo
                  MyIcon1={<VscLocation />}
                  MyTitle={'| NOS BELLES ADRESSES'}
                  MyIcon2={<FaHeadset />}
                  MyNumberPhone={'| 067 33 01 56 00'}
                  MyEmail={'Email | v-parrot@example.com'}
                  MyAdress={
                    <AdressInfo
                      nameSiege="Square de la Tour Saint-Jacques"
                      nameVille="Mont de Marsan"
                      nameAdress="102, Exemple des Bois 67004 Bordeau"
                    />
                  }
                />
              </div>
            </Col>
          </Row>
        </section>
        <section className="section-impaire">
          <div className="section-title">Nos Véhicules en Vente</div>

          <ViewCardCars listArray={listCars} NumbreOfCars={length} />
          <br />
          <br />
          <button
            className="My-Button "
            style={{ width: '220px' }}
            onClick={handelClickCars}
          >
            Voir plus...
          </button>
          <br />
          <br />
        </section>
        <section className="section-paire">
          <Row>
            <div className="section-title">Avis de Nos Clients</div>
            {listTestimonials.map((avis) => (
              <Col
                xs={12}
                md={6}
                xl={4}
                className="wrapper-testimonials"
                key={avis.id}
              >
                <div className="info-User-testimonial">
                  <Image
                    src={car}
                    roundedCircle
                    className="Rounded-Image-Testimonial "
                  />
                  <span>{avis.firstName}</span>
                  <span>{avis.lastName}</span>
                </div>
                <div className="My-testimonial">
                  {' '}
                  <span>{avis.testimonials[0].testimonial}</span>
                </div>
                <div className="Date-testimonial">
                  {avis.testimonials[0].testiDate} {' - '}
                  {avis.testimonials[0].testiTime}
                </div>
              </Col>
            ))}
          </Row>
        </section>
        <section className="section-impaire">
          <Row>
            <div className="section-title">Nos Compétences</div>
            {dataSkills.map((skill) => (
              <ViewCardSkills skillsArray={skill} />
            ))}
          </Row>
        </section>
        <section className="section-paire">
          <Row>
            <div className="section-title">Nos Services </div>
            <Row xs={12} md={6} xl={4} className="wrapper-services">
              {dataServices.map((myCard) => (
                <Card
                  key={myCard.id}
                  style={{
                    width: '20rem',
                    height: '30rem',
                  }}
                >
                  <Card.Img
                    src={myCard.myIcon}
                    alt="icon"
                    style={{
                      width: '16rem',
                      height: '10rem',
                      justifyContent: 'center',
                    }}
                  />
                  <Card.Body>
                    <Card.Title>{myCard.myTypeServices}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    {myCard.myServices.map((item) => (
                      <ListGroup.Item>{item.oneService}</ListGroup.Item>
                    ))}
                  </ListGroup>
                  <br />
                </Card>
              ))}
            </Row>
          </Row>
        </section>
        <br />
        <SendMessage />
      </article>
    </>
  );
}
