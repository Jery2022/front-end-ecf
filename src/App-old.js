import React from 'react';
import { Form, Button } from 'react-bootstrap';
import handleLogin from './js/script';

function App() {
  return (
    <main>
      <Form>
        <Button variant="outline-success" onClick={handleLogin}>
          Connexion
        </Button>
      </Form>
    </main>
  );
}

export default App;
