import React from 'react';
import sun from '../img/sun.svg';

export default function WeatherBlock() {
  return (
    <div className="weather-block-wrapper">
      <div className="weather-block">
        <div className="weather-ico">
          <img src={sun} alt="" />
        </div>
        <div className="weather-number">19º</div>
      </div>
      <div className="weather-description">Преимущественно солнечно</div>
    </div>
  );
}
