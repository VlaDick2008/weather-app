import React from 'react';
import sun from '../img/sun.svg';
import rain from '../img/cloudy.svg';

export default function WeatherBlock({ weatherInfo }) {
  return (
    <div>
      {typeof weatherInfo.weather != 'undefined' ? (
        <div className="weather-block-wrapper">
          <div className="weather-block">
            <div className="weather-ico">
              <img src={weatherInfo.cod === 200 ? sun : rain} alt="" />
            </div>
            <div className="weather-number">{Math.floor(weatherInfo.main.temp)}º</div>
          </div>
          <div className="weather-description">{weatherInfo.weather[0].description}</div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
