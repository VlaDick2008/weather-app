import React from 'react';
import sun from '../img/sun.svg';

export default function WeatherBlock({ weatherInfo }) {
  console.log(weatherInfo);
  return (
    <div>
      {typeof weatherInfo.weather != 'undefined' ? (
        <div className="weather-block-wrapper">
          <div className="weather-block">
            <div className="weather-ico">
              <img src={sun} alt="" />
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

// <div className="weather-number">{Math.floor(info.data.main.temp)}º</div>
// </div>
// <div className="weather-description">{info.data.weather[0].description}</div>
