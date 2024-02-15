import React from 'react';
import { Button, Col, Image, Row, Card, ListGroup } from 'react-bootstrap';
import { FaCalendarDays } from 'react-icons/fa6';
import { FaCircleCheck } from 'react-icons/fa6';
import { FaHeadset } from 'react-icons/fa6';
import { FaRegClock } from 'react-icons/fa6';
import { VscLocation } from 'react-icons/vsc';
import AdressInfo from '../../services/AdressInfo';
import ViewInfo from '../../services/ViewInfo';
import HeroImage from '../../services/HeroImage/HeroImage';
import cheminUrl from './../img/Img_rempla_vitre.jpg';
import cheminUrl3 from './../img/Img_peinture-car.jpg';
import cheminUrl4 from './../img/Img_rempla-frein.jpg';
import { listCars, listTestimonials, dataServices } from '../../../js/script';
import car from '../../../assets/images/cars/Chevrolet_camero2017_1.jpg';
import SendMessage from '../../services/SendMessage/SendMessage';
import './Home.css';

export default function Home() {
  const startIndex = 0;
  const endIndex = 4;
  const listTreeCards = listCars.slice(startIndex, endIndex);

  return (
    <>
      <main>
        <article className="container-fluid">
          <Row className="container-fluid">
            <HeroImage />
          </Row>
          <section className="container-fluid p-0 my-0">
            <Row
              className="slogan
              text-white "
            >
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
                    <Button
                      className="My-Button  m-auto"
                      style={{ width: '220px' }}
                    >
                      Contactez-nous !
                    </Button>
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
          <section className="container-fluid p-0 my-0 text-white">
            <div className="wrapper-col">
              <div className="section-title">Nos Véhicules en Vente</div>
              <div className="wrapper-products-list">
                {listTreeCards.map((car) => (
                  <div
                    key={car.id}
                    className="list-products-card
                card-hover"
                  >
                    <img
                      className="card-img-top"
                      src={car.imagesCar[0].src}
                      alt={car.nameCar}
                    />
                    <div className="card-cars-info">
                      <p className="card-cars-title"> {car.nameCar}</p>
                      <p>Model : {car.model}</p>
                      <p>Année : {car.year}</p>
                      <p>Kilomètrage : {car.kilometrage}</p>
                      <p>Motorisation : {car.morisation}</p>
                      <p className="card-cars-price">
                        Prix : {car.price} Euros
                      </p>
                    </div>
                    <Button
                      className="MyButton m-auto"
                      style={{ width: '220px' }}
                    >
                      Voir plus...
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="container-fluid p-0 my-0 text-white">
            <Row>
              <div className="section-title">Avis de Nos Clients</div>
              {listTestimonials.map((avis) => (
                <Col
                  xs={12}
                  md={6}
                  xl={4}
                  style={{ marginBottom: '50px' }}
                  key={avis.id}
                >
                  <div
                    className="wrapper-testimonials"
                    style={{ fontWeight: 'bold ' }}
                  >
                    <span>{avis.firstName}</span>
                    <span>{avis.lastName}</span>
                  </div>
                  <div className="one-testimonial">
                    <Image src={car} roundedCircle className="imageXs" />
                    <div className="one-comment">
                      {' '}
                      <span>{avis.testimonials[0].testimonial}</span>
                    </div>
                  </div>
                  <div className="testimonials">
                    {avis.testimonials[0].testiDate} {' - '}
                    {avis.testimonials[0].testiTime}
                  </div>
                </Col>
              ))}
            </Row>
          </section>
          <section className="container-fluid p-0 my-0 text-white px-2">
            <Row>
              <div className="section-title">Nos Compétences</div>
              <Col xs={12} md={6} xl={4} className="wrapper-skills ">
                <div>
                  <img
                    src={cheminUrl}
                    style={{ width: '100px', height: '100px' }}
                    alt="Avatar"
                  />
                  <p className="h-line titleAvatar">
                    V. Parrot agréé assurances
                  </p>
                  <p className="v-line description">
                    Notre garage est agréé toutes assurances. Nous vous offrons
                    la franchise et mettons à votre disposition un véhicule de
                    prêt.
                  </p>
                </div>
                <div class="wrapper-skills">
                  <Button className="My-Button">En savoir plus...</Button>
                </div>
              </Col>

              <Col xs={12} md={6} xl={4} className="wrapper-skills">
                <div>
                  <img
                    src={cheminUrl}
                    style={{ width: '100px', height: '100px' }}
                    alt="Avatar"
                  />
                  <p className="h-line titleAvatar">Vitrérie</p>
                  <p className="v-line description">
                    <span>V. Parrot</span>change votre pare-brise, vos autres
                    vitres et vous offre la franchise.
                  </p>
                </div>
                <div class="wrapper-skills">
                  <Button className="My-Button">En savoir plus...</Button>
                </div>
              </Col>

              <Col xs={12} md={6} xl={4} className="wrapper-skills">
                <div>
                  <img
                    src={cheminUrl3}
                    style={{ width: '100px', height: '100px' }}
                    alt="Avatar"
                  />
                  <p className="h-line titleAvatar">Carrosserie</p>
                  <p className="v-line description">
                    <span>V. Parrot</span>vous propose un atelier de carrosserie
                    avec des carrossiers expérimentés. Notre cabine de grande
                    dimension nous permet également d’intervenir sur des
                    utilitaires.
                  </p>
                </div>
                <div class="wrapper-skills">
                  <Button className="My-Button">En savoir plus...</Button>
                </div>
              </Col>
              <Col xs={12} md={6} xl={4} className="wrapper-skills">
                <div>
                  <img
                    src={cheminUrl4}
                    style={{ width: '100px', height: '100px' }}
                    alt="Avatar"
                  />
                  <p className="h-line titleAvatar">Mécanique</p>
                  <p className="v-line description">
                    Notre garage mécanique effectue toutes vos réparations et
                    vos travaux d’entretien.
                  </p>
                </div>
                <div class="wrapper-skills ">
                  <Button className="My-Button">En savoir plus...</Button>
                </div>
              </Col>
            </Row>
          </section>
          <section className="container-fluid p-0 my-0 text-white px-2">
            <Row>
              <div className="section-title">Nos Services </div>
              <Row xs={12} md={6} xl={4} className="wrapper-services">
                {dataServices.map((myCard) => (
                  <Card
                    key={myCard.id}
                    style={{
                      width: '30rem',
                    }}
                  >
                    <Card.Img
                      src={myCard.myIcon}
                      alt="icon"
                      style={{
                        width: '16rem',
                        justifyContent: 'center',
                        margin: 'auto',
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
                    <Card.Body>
                      <Card.Link className="Link-App" href="#">
                        Détail...
                      </Card.Link>
                      <Card.Link className="Link-App" href="#">
                        Retour Accueil
                      </Card.Link>
                    </Card.Body>
                  </Card>
                ))}
              </Row>
            </Row>
          </section>
          <br />
          <SendMessage />
        </article>
      </main>
    </>
  );
}
