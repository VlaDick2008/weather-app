import React from 'react';

import locationImg from '../img/location.svg';

export default function SityBlock({ sity, aaa }) {
  return (
    <div className="sity-block">
      <input
        type="text"
        onChange={(e) => sity(e.target.value)}
        value={aaa}
        className="sity-name"></input>
      <div className="change-sity-block">
        <div className="change-sity">Сменить город</div>
        <img className="position-logo" src={locationImg} alt="" />
        <div className="your-position">Моё местоположение</div>
      </div>
    </div>
  );
}
