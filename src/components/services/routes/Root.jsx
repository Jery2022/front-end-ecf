import * as React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import '../../../index.css';
import Home from '../../pages/Home';
import Services from '../../pages/Services';
import About from '../../pages/About';
import Gallery from '../../pages/GalleryImage';
import Contact from '../../pages/Contact';
import ErrorPage from '../../pages/ErrorPage';
import Login from '../../pages/Login';

function Root() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default Root;
