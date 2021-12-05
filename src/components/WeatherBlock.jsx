import React from 'react';
import sun from '../img/sun.svg';
import rain from '../img/cloudy.svg';

export default function WeatherBlock({ degreeIndex, weatherInfo }) {
  const [sas, saas] = React.useState('');

  React.useLayoutEffect(() => {
    if (typeof weatherInfo.weather !== 'undefined') {
      saas(weatherInfo.main.temp);
    }

    if (degreeIndex === 1) {
      saas(weatherInfo.main.temp * 1.8 + 32);
    } else if (degreeIndex === 0) {
      saas(weatherInfo.main.temp);
    }
  }, [saas, degreeIndex, weatherInfo]);
  return (
    <div>
      {typeof weatherInfo.weather !== 'undefined' ? (
        <div className="weather-block-wrapper">
          <div className="weather-block">
            <div className="weather-ico">
              <img src={weatherInfo.cod === 200 ? sun : rain} alt="" />
            </div>
            <div className="weather-number">{Math.floor(sas)}º</div>
          </div>
          <div className="weather-description">{weatherInfo.weather[0].description}</div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

// Math.floor(weatherInfo.main.temp)
