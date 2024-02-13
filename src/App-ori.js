//App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './routes/Root';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Root />
      </Router>
    </>
  );
}
export default App;
