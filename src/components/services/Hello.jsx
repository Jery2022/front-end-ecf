import { Link } from 'react-router-dom';
import './css/Hello.css';

export default function Hello() {
  return (
    <div>
      <div className="Hello">
        <h1>BIENVENUE AU GARAGE V.PARROT</h1>
      </div>
      <div className="RetourHome">
        <Link to="/">Retour accueil</Link>
      </div>
    </div>
  );
}
