import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faDribbble,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export default function About() {
  return (
    <>
      <main>
        <article
          id="about-accueil"
          className="container-fluid content-bienvenue "
        >
          <section className="container-fluid p-3 my-0">
            <div className="wrapper-col">
              <p className="section-title">A Propos de Nous</p>
              <div>
                <p>
                  Chez<span> V.Parrot</span>, nous comprenons à quel point votre
                  véhicule est précieux pour vous. C'est pourquoi notre équipe
                  de professionnels passionnés met tout en œuvre pour vous
                  offrir un service de qualité, moderne et empreint d'empathie.
                  Que vous ayez besoin d'un simple entretien, d'une réparation
                  complexe ou même d'une restauration complète, nous sommes là
                  pour vous accompagner à chaque étape. Notre expertise et notre
                  savoir-faire nous permettent de vous proposer des solutions
                  adaptées et personnalisées, afin de garantir la longévité et
                  les performances de votre véhicule. Naviguez à travers notre
                  site pour découvrir nos services, nos tarifs compétitifs et
                  nos conseils d'experts. Nous mettons un point d'honneur à vous
                  fournir toutes les informations nécessaires pour que vous
                  puissiez prendre des décisions éclairées concernant votre
                  véhicule. N'hésitez pas à nous contacter pour toute demande
                  d'information supplémentaire ou pour prendre rendez-vous. Nous
                  serons ravis de vous aider et de vous offrir une expérience
                  client exceptionnelle. Merci de votre confiance et à bientôt
                  chez <span>V.Parrot</span>, votre partenaire automobile de
                  confiance.
                </p>
              </div>
            </div>
            <div className="wrapper-col">
              <p className="section-title">Nos Valeurs & Missions</p>
              <div>
                <p>
                  Chez<span> V.Parrot</span>, nous comprenons à quel point votre
                  véhicule est précieux pour vous. C'est pourquoi notre équipe
                  de professionnels passionnés met tout en œuvre pour vous
                  offrir un service de qualité, moderne et empreint d'empathie.
                  Que vous ayez besoin d'un simple entretien, d'une réparation
                  complexe ou même d'une restauration complète, nous sommes là
                  pour vous accompagner à chaque étape. Notre expertise et notre
                  savoir-faire nous permettent de vous proposer des solutions
                  adaptées et personnalisées, afin de garantir la longévité et
                  les performances de votre véhicule. Naviguez à travers notre
                  site pour découvrir nos services, nos tarifs compétitifs et
                  nos conseils d'experts. Nous mettons un point d'honneur à vous
                  fournir toutes les informations nécessaires pour que vous
                  puissiez prendre des décisions éclairées concernant votre
                  véhicule. N'hésitez pas à nous contacter pour toute demande
                  d'information supplémentaire ou pour prendre rendez-vous. Nous
                  serons ravis de vous aider et de vous offrir une expérience
                  client exceptionnelle. Merci de votre confiance et à bientôt
                  chez <span>V.Parrot</span>, votre partenaire automobile de
                  confiance.
                </p>
              </div>
            </div>
            <div className="wrapper-col">
              <p className="section-title">Notre Equipe</p>
              <div class="row">
                <div class="column">
                  <div class="card card-hover">
                    <img
                      src="/w3images/team1.jpg"
                      alt="Jane"
                      style={{ width: '100%' }}
                    />
                    <div class="container">
                      <h2>Jane Doe</h2>
                      <p class="grade">CEO & Founder</p>
                      <p>
                        Some text that describes me lorem ipsum ipsum lorem.
                      </p>
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
                      <button class="MyButton">En savoir plus...</button>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="card card-hover">
                    <img
                      src="/w3images/team2.jpg"
                      alt="Mike"
                      style={{ width: '100%' }}
                    />
                    <div class="container">
                      <h2>Mike Ross</h2>
                      <p class="grade">Art Director</p>
                      <p>
                        Some text that describes me lorem ipsum ipsum lorem.
                      </p>
                      <p>mike@example.com</p>
                      <p>
                        <button class="MyButton">En savoir plus...</button>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="card card-hover">
                    <img
                      src="/w3images/team3.jpg"
                      alt="John"
                      style={{ width: '100%' }}
                    />
                    <div class="container">
                      <h2>John Doe</h2>
                      <p class="grade">Designer</p>
                      <p>
                        Some text that describes me lorem ipsum ipsum lorem.
                      </p>
                      <p>john@example.com</p>
                      <p>
                        <button class="MyButton">En savoir plus...</button>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="card card-hover">
                    <img
                      src="/w3images/team3.jpg"
                      alt="John"
                      style={{ width: '100%' }}
                    />
                    <div class="container">
                      <h2>John Doe</h2>
                      <p class="grade">Designer</p>
                      <p>
                        Some text that describes me lorem ipsum ipsum lorem.
                      </p>
                      <p>john@example.com</p>
                      <p>
                        <button class="MyButton">En savoir plus...</button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button class="MyButton" style={{ width: '300px' }}>
                  En savoir plus sur notre équipe...
                </button>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
