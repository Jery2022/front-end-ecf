import React from 'react';
import { Col, Image } from 'react-bootstrap';

function ViewCardSkills(props) {
  return (
    <>
      <Col xs={12} md={6} xl={4} className="wrapper-skills">
        <div key={props.skillsArray.id}>
          <Image
            src={props.skillsArray.SkillImage}
            style={{ width: '100px', height: '100px' }}
            alt="Image de compétence"
          />
          <p className="h-line titleAvatar">{props.skillsArray.SkillTitle}</p>
          <p className="v-line description">
            {props.skillsArray.SkillDescription}
          </p>
        </div>
        <div>
          <button className="My-Button" style={{ width: '220px' }}>
            En savoir plus...
          </button>
        </div>
      </Col>
    </>
  );
}

export default ViewCardSkills;
