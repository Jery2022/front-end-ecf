import './css/Footer.css';

export default function Footer() {
  return (
    <>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"
      ></script>
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
