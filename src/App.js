import React from 'react';

import Header from './components/Header';
import WeatherBlock from './components/WeatherBlock';
import WeatherDetails from './components/WeatherDetails';

function App() {
  React.useEffect(() => {
    document.querySelector('body').classList.add('sunny');
  }, []);

  return (
    <div className="main-wrapper">
      <Header />
      <WeatherBlock />
      <WeatherDetails />
    </div>
  );
}

export default App;
