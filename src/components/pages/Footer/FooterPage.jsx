import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="My-Footer">
          <p>
            Pour plus d’informations sur la gestion de vos données et vos
            droits, consultez notre :
          </p>
          <p>
            <a className="My-Footer-link" href="/">
              <i>-->politique de confidentialité</i>
            </a>
          </p>
          <p>
            © {new Date().getFullYear()} Garage Automobile V. PARROT. Tous
            droits réservés.
          </p>
        </div>
      </footer>
    </>
  );
}
