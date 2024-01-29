import * as React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';
import Home from '../components/Home';
import Services from '../components/Services';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import ErrorPage from '../components/ErrorPage';
import Login from '../components/Login';

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
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default Root;
