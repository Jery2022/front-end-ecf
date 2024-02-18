import React from 'react';
//import Card from 'react-bootstrap/Card';
//import ListGroup from 'react-bootstrap/ListGroup';
import { dataServices } from '../../../js/script';

function ViewDataServices() {
  <>
    return (
    <div>
      {dataServices.services.map((service) => (
        <div key={service.id}>
          <h2>{service.myTypeServices}</h2>
          <i className={service.myIcon}></i>
          <ul>
            {service.myServices.map((subService) => (
              <li key={subService.id}>{subService.oneService}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    );
  </>;
}

export default ViewDataServices;
