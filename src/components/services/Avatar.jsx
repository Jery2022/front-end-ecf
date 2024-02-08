import React from 'react';

export default function Avatar({ AvatarPath, AvatarStyle, AvatartAlt }) {
  let cheminUrl = AvatarPath;
  let avatarCss = AvatarStyle;
  let avatarAlt = AvatartAlt;
  return <img src={cheminUrl} className={avatarCss} alt={avatarAlt} />;
}
