import * as React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import '../../../index.css';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Gallery from '../../pages/Gallery/Gallery';
import Contact from '../../pages/Contact/Contact';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import Login from '../../pages/Login/Login';

function Root() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Root;
