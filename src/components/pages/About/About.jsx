import '../../../index.css';
import './About.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faDribbble,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { listEmployed } from '../../../assets/datas/employed.datas.js';

export default function About() {
  const startIndex = 0;
  const endIndex = 4;
  const fourEmployed = listEmployed.slice(startIndex, endIndex);

  return (
    <>
      <article>
        <section className="container-fluid section-paire">
          <div className="section-title">A Propos</div>
          <div className="wrapper-valeur-mission">
            <p>
              Chez<span> V.Parrot</span>, nous comprenons à quel point votre
              véhicule est précieux pour vous. C'est pourquoi notre équipe de
              professionnels passionnés met tout en œuvre pour vous offrir un
              service de qualité, moderne et empreint d'empathie. Que vous ayez
              besoin d'un simple entretien, d'une réparation complexe ou même
              d'une restauration complète, nous sommes là pour vous accompagner
              à chaque étape. Notre expertise et notre savoir-faire nous
              permettent de vous proposer des solutions adaptées et
              personnalisées, afin de garantir la longévité et les performances
              de votre véhicule. Naviguez à travers notre site pour découvrir
              nos services, nos tarifs compétitifs et nos conseils
              d'experts.Merci de votre confiance et à bientôt chez{' '}
              <span>V.Parrot</span>, votre partenaire automobile de confiance.
            </p>
          </div>
        </section>
        <section>
          <div className="container-fluid section-impaire">
            <div className="section-title">Nos Valeurs & Missions</div>
            <div className="wrapper-valeurs">
              <p>
                Chez <span>V.Parrot</span>, vos voitures sont précieuses pour
                nous et nous respectons vos avis et vos choix. Nous mettons un
                point d'honneur à vous fournir toutes les informations
                nécessaires pour que vous puissiez prendre des décisions
                éclairées concernant votre véhicule. C'est pourquoi nos actions
                sont guidées par :
              </p>
              <div className="container-valeurs">
                <div>Valeurs :</div>
                <div className="container-bg-image-valeurs"></div>
                <div className="valeurs p-2">
                  <span>Qualité :</span> offrir un service de réparation de
                  qualité pour garantir la satisfaction des clients et la
                  fiabilité des véhicules.
                  <span>Service client</span> : placer les besoins et la
                  satisfaction des clients au cœur de nos préoccupations en
                  offrant un service personnalisé et attentionné.
                </div>
              </div>
              <div>
                <h4>Missions :</h4>
                <div className="container-reverse">
                  <div className="container-missions">
                    <div className=" p-2">
                      <span>Réparer et entretenir </span>
                      tous types de véhicules avec expertise et
                      professionnalisme.
                    </div>
                    <div div className=" p-2">
                      <span>Accompagner </span> les clients à chaque étape, en
                      offrant des solutions adaptées à leurs besoins
                      spécifiques.{' '}
                    </div>
                    <div div className=" p-2">
                      <span>Garantir</span> la longévité et les performances des
                      véhicules grâce à notre expertise et notre savoir-faire.
                    </div>
                    <div div className=" p-2">
                      <span>Proposer </span> des tarifs compétitifs pour rendre
                      nos services accessibles à un large éventail de clients.{' '}
                    </div>
                    <div div className=" p-2">
                      <span>Cultiver </span> une relation de confiance avec nos
                      clients en offrant un service fiable et transparent.
                    </div>
                    <div div className=" p-2">
                      <span>Favoriser </span>la mobilité durable en maintenant
                      les véhicules en bon état de fonctionnement.
                    </div>
                    <div div className=" p-2">
                      <span>Promouvoir </span> une culture d'entreprise basée
                      sur le respect, la collaboration et l'innovation.{' '}
                    </div>
                  </div>
                  <div className="container-bg-image-mission"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="wrapper-cards">
            <p className="section-title">Notre Equipe</p>
            {fourEmployed.map((employe) => (
              <div class="col " key={employe.id}>
                <div class="row m-1">
                  <div class="card card-hover">
                    <img
                      src={employe.avatar}
                      alt={employe.titre}
                      style={{ width: '100%', padding: '10px' }}
                    />
                    <div class="container-fluid">
                      <h2>
                        {employe.firstName} {''} {employe.lastName}
                      </h2>
                      <p class="grade">{employe.titre}</p>
                      <p>{employe.description}</p>
                      <i className="wrapper-Icons">
                        <FontAwesomeIcon icon={faDribbble} />
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon
                          icon={faFacebookF}
                          size="lg"
                          style={{ color: 'blue' }}
                        />
                        <FontAwesomeIcon
                          icon={faTwitter}
                          style={{ color: 'blue' }}
                        />
                      </i>
                    </div>
                    <p>
                      <button class="My-Button" style={{ width: '220px' }}>
                        En savoir plus...
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div>
              <button class="My-Button" style={{ width: '300px' }}>
                En savoir plus sur notre équipe...
              </button>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
