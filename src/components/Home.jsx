import './css/Home.css';
import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { FaCalendarDays } from 'react-icons/fa6';
import { FaCircleCheck } from 'react-icons/fa6';
import { FaHeadset } from 'react-icons/fa6';
import { FaRegClock } from 'react-icons/fa6';
import { VscLocation } from 'react-icons/vsc';
import AdressInfo from './services/AdressInfo';
import ViewInfo from './services/ViewInfo';
//import SlideShow from './services/SlideShow';
import HeroImage from './HeroImage';
import Footer from './Footer';
import cheminUrl from './../img/Img_rempla_vitre.jpg';
import cheminUrl3 from './../img/Img_peinture-car.jpg';
import cheminUrl4 from '../img/img_rempla-frein.jpg';
import { listCars, listTestimonials } from '../js/script';
import car from './../assets/images/cars/Chevrolet_camero2017_1.jpg';

export default function Home() {
  /*const afficheCars = () => {
    console.log(listCars); 
  }; 
  afficheCars(); */

  return (
    <>
      <main>
        <article className="container-fluid  p-0 m-0 pt-lg-2 px-3">
          <Row className="container-fluid p-0 m-0">
            <HeroImage />
          </Row>
          <section className="container-fluid p-0 my-0">
            <Row
              className="slogan bg-dark 
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
                      className="MyButton  m-auto"
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
                {listCars.map((car) => (
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
                  <Button className="MyButton">En savoir plus...</Button>
                </div>
              </Col>

              <Col xs={12} md={6} xl={4} className="wrapper-skills">
                <div>
                  <img
                    src={cheminUrl}
                    style={{ width: '100px', height: '100px' }}
                    alt="Avatar"
                  />
                  <p className="h-line titleAvatar">Changement pare-brise</p>
                  <p className="v-line description">
                    <span>V. Parrot</span>change votre pare-brise et vous offre
                    la franchise.
                  </p>
                </div>
                <div class="wrapper-skills">
                  <Button className="MyButton">En savoir plus...</Button>
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
                  <Button className="MyButton">En savoir plus...</Button>
                </div>
              </Col>
              <Col xs={12} md={6} xl={4} className="wrapper-skills">
                <div>
                  <img
                    src={cheminUrl4}
                    style={{ width: '100px', height: '100px' }}
                    alt="Avatar"
                  />
                  <p className="h-line titleAvatar">Préstation mécanique</p>
                  <p className="v-line description">
                    Notre garage mécanique effectue toutes vos réparations et
                    vos travaux d’entretien.
                  </p>
                </div>
                <div class="wrapper-skills ">
                  <Button className="MyButton">En savoir plus...</Button>
                </div>
              </Col>
            </Row>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
