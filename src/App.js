import React from 'react';
import { transliterate as tr } from 'transliteration';

import DegreeBlock from './components/DegreeBlock';
import SityBlock from './components/SityBlock';
import WeatherBlock from './components/WeatherBlock';
import WeatherDetails from './components/WeatherDetails';

function App() {
  const [info, weatherData] = React.useState('');
  const [city, cityChange] = React.useState('Омск');
  const [position, positionChange] = React.useState('');

  const apiKey = '12cefab9977763ddc5f50d7e363a40f8';
  const apiBase = 'http://api.openweathermap.org/data/2.5/';
  const apiCity = tr(city);

  const updateCityData = (value) => {
    cityChange(value);
    console.log('обновил сити');
  };

  const updatePositionData = (position) => {
    positionChange(position);
    console.log('обновил поситион');
  };

  React.useLayoutEffect(() => {
    if (typeof position.coords !== 'undefined') {
      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json&addressdetails=[0|1]`,
      )
        .then((resp) => resp.json())
        .then((result) => {
          cityChange(result.address.city);
          console.log('определил координаты');
        });
    }
  }, [position.coords]);

  React.useEffect(() => {
    fetch(`${apiBase}weather?q=${apiCity}&appid=${apiKey}&lang=ru&units=metric`)
      .then((resp) => resp.json())
      .then((result) => {
        weatherData(result);
        console.log('получил город');
      });
  }, [apiCity]);

  React.useLayoutEffect(() => {
    document.querySelector('body').classList.add('sunny');
  }, []);

  return (
    <div className="main-wrapper">
      <header>
        <SityBlock
          updatePositionData={updatePositionData}
          cici={city}
          updateCityData={updateCityData}
        />
        <DegreeBlock items={['C', 'F']} />
      </header>
      <WeatherBlock weatherInfo={info} />
      <WeatherDetails weatherInfo={info} />
    </div>
  );
}

export default App;
