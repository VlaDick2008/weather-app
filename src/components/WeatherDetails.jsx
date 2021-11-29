import React from 'react';

export default function WeatherDetails() {
  return (
    <div className="weather-details">
      <div className="weather-details-block">
        <div className="weather-details-title">Ветер</div>
        <div className="weather-details-text">5 м/c, западный</div>
      </div>
      <div className="weather-details-block">
        <div className="weather-details-title">Давление</div>
        <div className="weather-details-text">752 мм рт. ст.</div>
      </div>
      <div className="weather-details-block">
        <div className="weather-details-title">Влажность</div>
        <div className="weather-details-text">60%</div>
      </div>
      <div className="weather-details-block">
        <div className="weather-details-title">Вероятность дождя</div>
        <div className="weather-details-text">10%</div>
      </div>
    </div>
  );
}
