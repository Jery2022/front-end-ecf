import Footer from './Footer';
import './css/About.css';

export default function About() {
  return (
    <>
      <main>
        <section className="About">
          <h2>About</h2>
          <p>Some text about who we are and what we do.</p>
          <p>
            Resize the browser window to see that this page is responsive by the
            way.
          </p>

          <h2 className="about-title">Our Team</h2>
          <div class="row">
            <div class="column">
              <div class="card">
                <img
                  src="/w3images/team1.jpg"
                  alt="Jane"
                  style={{ width: '100%' }}
                />
                <div class="container">
                  <h2>Jane Doe</h2>
                  <p class="grade">CEO & Founder</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>jane@example.com</p>
                  <p>
                    <button class="button">En savoir plus...</button>
                  </p>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <img
                  src="/w3images/team2.jpg"
                  alt="Mike"
                  style={{ width: '100%' }}
                />
                <div class="container">
                  <h2>Mike Ross</h2>
                  <p class="grade">Art Director</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>mike@example.com</p>
                  <p>
                    <button class="button">En savoir plus...</button>
                  </p>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <img
                  src="/w3images/team3.jpg"
                  alt="John"
                  style={{ width: '100%' }}
                />
                <div class="container">
                  <h2>John Doe</h2>
                  <p class="grade">Designer</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>john@example.com</p>
                  <p>
                    <button class="button">En savoir plus...</button>
                  </p>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <img
                  src="/w3images/team3.jpg"
                  alt="John"
                  style={{ width: '100%' }}
                />
                <div class="container">
                  <h2>John Doe</h2>
                  <p class="grade">Designer</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>john@example.com</p>
                  <p>
                    <button class="button">En savoir plus...</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p>
              <br />
              <button class="button">En savoir plus sur notre équipe...</button>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
