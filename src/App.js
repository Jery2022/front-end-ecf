import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './components/utils/routes/Root';
import FooterPage from './components/pages/Footer/FooterPage';
import HeaderPage from './components/pages/Header/HeaderPage';
import Landing from './components/pages/Landing/Landing';

function App() {
  return (
    <>
      <Router>
        <HeaderPage />
        <Landing />
        <Root />
        <FooterPage />
      </Router>
    </>
  );
}

export default App;
