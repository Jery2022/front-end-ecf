import React from 'react';
import './css/SkillBox.css';

function SkillBox({ avatar, info1, info2, info3, info4 }) {
  return (
    <div className="avatar-box">
      <div className="avatar-circle">
        <img src={avatar} alt="Avatar" />
      </div>
      <div className="info-box">
        <div className="info">{info1}</div>
        <div className="info">{info2}</div>
        <div className="info">{info3}</div>
        <div className="info">{info4}</div>
      </div>
    </div>
  );
}

export default SkillBox;
