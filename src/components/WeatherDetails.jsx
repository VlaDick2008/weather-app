import React from 'react';

export default function WeatherDetails({ weatherInfo, forecast }) {
  if (typeof weatherInfo.weather != 'undefined') {
    var compassPoints = [
      'северный',
      'северный, северно-восточный',
      'северо-восточный',
      'восточный, северо-восточный',
      'восточный',
      'восточный, юго-восточный',
      'южный, восточный',
      'южный, юго-восточный',
      'южный',
      'южный юго-западный',
      'юго-западный',
      'западный, юго-западный',
      'западный',
      'западный, юго-западный',
      'северный, западный',
      'северный, северо-западный',
    ];
    const rawPosition = Math.floor(weatherInfo.wind.deg / 22.5 + 0.5);
    var arrayPosition = rawPosition % 16;
  }

  console.log(forecast);

  return (
    <div className="weather-details">
      {typeof weatherInfo.weather != 'undefined' ? (
        <div className="weather-details">
          <div className="weather-details-block">
            <div className="weather-details-title">Ветер</div>
            <div className="weather-details-text">
              {weatherInfo.wind.speed} м/c, {compassPoints[arrayPosition]}
            </div>
          </div>
          <div className="weather-details-block">
            <div className="weather-details-title">Давление</div>
            <div className="weather-details-text">{weatherInfo.main.pressure} мм рт. ст.</div>
          </div>
          <div className="weather-details-block">
            <div className="weather-details-title">Влажность</div>
            <div className="weather-details-text">{weatherInfo.main.humidity}%</div>
          </div>
          <div className="weather-details-block">
            <div className="weather-details-title">Вероятность дождя</div>
            <div className="weather-details-text">10%</div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
