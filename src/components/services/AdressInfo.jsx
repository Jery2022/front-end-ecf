import React from 'react';

const AdressInfo = (props) => {
  return (
    <>
      <p>
        {props.nameSiege}
        <br />
        <b>
          <i>{props.nameVille}</i>
        </b>
        <br />
        {props.nameAdress}
      </p>
    </>
  );
};
export default AdressInfo;
