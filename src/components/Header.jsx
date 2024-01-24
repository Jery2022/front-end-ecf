
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À Propos</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/gallery">Galérie</Link></li>
          <li><Link to="/login">Connexion</Link></li>
        </ul>
      </nav>
    </header>
  );
}


