import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import '../../../index.css';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Gallery from '../../pages/Gallery/Gallery';
import Contact from '../../pages/Contact/Contact';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import Login from '../../pages/Login/Login';
//import Landing from '../../pages/Landing/Landing';
import HeroImage from '../HeroImage/HeroImage';

function Root() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeroImage />} errorElement={<ErrorPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default Root;
