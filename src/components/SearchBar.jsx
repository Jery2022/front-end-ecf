import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function SearchBar() {
  return (
    <>
      <Form
        className="d-flex  
             flex-lg-row justify-content-end 
              align-items-center gap-2 
              "
      >
        <Form.Control
          type="search"
          placeholder="Search"
          className=" m-0 align-bottom"
          aria-label="Search"
          style={{ width: '220px' }}
        />
        <Button style={{ width: '120px' }} variant="outline-success">
          Search
        </Button>
      </Form>
    </>
  );
}
