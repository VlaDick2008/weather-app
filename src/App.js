import React from 'react';

import Header from './components/Header';
import WeatherBlock from './components/WeatherBlock';
import WeatherDetails from './components/WeatherDetails';

function App() {
  const [info, weatherData] = React.useState('');
  const [query, setQuery] = React.useState('');
  const [forecast, getForecast] = React.useState('');

  const apiKey = '12cefab9977763ddc5f50d7e363a40f8';
  const apiBase = 'http://api.openweathermap.org/data/2.5/';

  // React.useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios(
  //       `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&lang=ru&units=metric`,
  //     );
  //     weatherData(response);
  //   }
  //   fetchData();
  // }, []);

  React.useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Omsk&appid=${apiKey}&lang=ru&units=metric`,
      // `${apiBase}weather?q=${query}&appid=${apiKey}&lang=ru&units=metric`,
    )
      .then((resp) => resp.json())
      .then((result) => {
        weatherData(result);
        setQuery('');
        console.log(result);
      });
  }, []);

  // React.useEffect(() => {
  //   fetch(
  //     `http://pro.openweathermap.org/data/2.5/forecast/hourly?q=Omsk&appid=${apiKey}`,
  //     // `${apiBase}weather?q=${query}&appid=${apiKey}&lang=ru&units=metric`,
  //   )
  //     .then((resp) => resp.json())
  //     .then((result) => {
  //       getForecast(result);
  //     });
  // }, []);
  // console.log(info);

  React.useEffect(() => {
    document.querySelector('body').classList.add('sunny');
  }, []);

  return (
    <div className="main-wrapper">
      <Header sity={setQuery} aaa={query} />
      <WeatherBlock weatherInfo={info} />
      <WeatherDetails forecast={forecast} weatherInfo={info} />
    </div>
  );
}

export default App;
