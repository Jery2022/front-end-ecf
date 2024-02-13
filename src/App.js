import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './components/services/routes/Root';
import FooterPage from './components/pages/FooterPage';
import HeaderPage from './components/pages/HeaderPage';
//import Login from './components/pages/Login';

function App() {
  return (
    <>
      <Router>
        <HeaderPage />
        <Root />
        <FooterPage />
      </Router>
    </>
  );
}

export default App;
