import React from 'react';

import locationImg from '../img/location.svg';

export default function SityBlock() {
  return (
    <div className="sity-block">
      <div className="sity-name">Омск</div>
      <div className="change-sity-block">
        <div className="change-sity">Сменить город</div>
        <img className="position-logo" src={locationImg} alt="" />
        <div className="your-position">Моё местоположение</div>
      </div>
    </div>
  );
}
