import React from 'react';
import { transliterate as tr } from 'transliteration';

import DegreeBlock from './components/DegreeBlock';
import SityBlock from './components/SityBlock';
import WeatherBlock from './components/WeatherBlock';
import WeatherDetails from './components/WeatherDetails';

function App() {
  const [info, weatherData] = React.useState('');
  const [sity, sityChange] = React.useState('Omsk');

  const apiKey = '12cefab9977763ddc5f50d7e363a40f8';
  const apiBase = 'http://api.openweathermap.org/data/2.5/';
  const apiCity = tr(sity);

  const updateCityData = (value) => {
    sityChange(value);
  };

  console.log(apiCity);

  React.useEffect(() => {
    fetch(`${apiBase}weather?q=${apiCity}&appid=${apiKey}&lang=ru&units=metric`)
      .then((resp) => resp.json())
      .then((result) => {
        weatherData(result);
      });
  }, [apiCity]);

  React.useEffect(() => {
    document.querySelector('body').classList.add('sunny');
  }, []);

  return (
    <div className="main-wrapper">
      <header>
        <SityBlock updateCityData={updateCityData} />
        <DegreeBlock items={['C', 'F']} />
      </header>
      <WeatherBlock weatherInfo={info} />
      <WeatherDetails weatherInfo={info} />
    </div>
  );
}

export default App;
