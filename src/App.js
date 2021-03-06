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
  const [degreeIndex, setDegreeIndex] = React.useState('');

  const apiKey = '12cefab9977763ddc5f50d7e363a40f8';
  const apiBase = 'https://api.openweathermap.org/data/2.5/';
  const apiCity = tr(city);

  const updateCityData = (value) => {
    cityChange(value);
  };

  const updatePositionData = (position) => {
    positionChange(position);
  };

  const updateDegreeIndex = (index) => {
    setDegreeIndex(index);
  };

  React.useLayoutEffect(() => {
    if (typeof position.coords !== 'undefined') {
      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json&addressdetails=[0|1]`,
      )
        .then((resp) => resp.json())
        .then((result) => {
          cityChange(result.address.city);
        });
    }
  }, [position.coords]);

  React.useEffect(() => {
    fetch(`${apiBase}weather?q=${apiCity}&appid=${apiKey}&lang=ru&units=metric`)
      .then((resp) => resp.json())
      .then((result) => {
        weatherData(result);
      });
  }, [apiCity]);

  return (
    <div className="main-wrapper">
      <header>
        <SityBlock
          updatePositionData={updatePositionData}
          cici={city}
          updateCityData={updateCityData}
          cityChange={cityChange}
        />
        <DegreeBlock updateDegreeIndex={updateDegreeIndex} items={['C', 'F']} />
      </header>
      <WeatherBlock degreeIndex={degreeIndex} weatherInfo={info} />
      <WeatherDetails weatherInfo={info} />
    </div>
  );
}

export default App;
