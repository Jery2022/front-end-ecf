import React from 'react';
import './css/ViewInfo.css';

const ViewInfo = (props) => {
  return (
    <>
      <p>
        {props.MyIcon1} <b>{props.MyTitle}</b>
      </p>
      <p>
        {props.MyIcon2} {props.MyNumberPhone}{' '}
      </p>
      <p>{props.MyEmail}</p>
      <div className="wrapper-adress">{props.MyAdress}</div>
    </>
  );
};
export default ViewInfo;
