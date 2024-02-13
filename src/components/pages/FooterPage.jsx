import './../css/Footer.css';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="MyFooter">
          <p>
            Pour plus d’informations sur la gestion de vos données et vos
            droits, consultez notre
          </p>
          <p>
            <a href="/">politique de confidentialité.</a>
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
