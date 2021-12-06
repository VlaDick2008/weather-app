import React from 'react';
import sun from '../img/sun.svg';
import cloudy from '../img/cloudy.svg';
import clouds from '../img/clouds.svg';
import partly_cloudy from '../img/partly_cloudy.svg';
import rain from '../img/rain.svg';
import strom from '../img/strom.svg';
import snow from '../img/snow.svg';
import fog from '../img/fog.svg';

export default function WeatherBlock({ degreeIndex, weatherInfo }) {
  const [degree, setDegree] = React.useState('');
  const [image, setImage] = React.useState('');

  // case (600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622):

  React.useLayoutEffect(() => {
    console.log(weatherInfo);
    if (typeof weatherInfo.weather !== 'undefined') {
      switch (weatherInfo.weather[0].id) {
        case 600:
        case 601:
        case 602:
        case 611:
        case 612:
        case 613:
        case 615:
        case 616:
        case 620:
        case 621:
        case 622:
          setImage(snow);
          document.querySelector('body').classList.add('snow');
          document
            .querySelector('body')
            .classList.remove('sunny', 'cloudy', 'rain', 'storm', 'fog');
          break;
        case 701:
        case 711:
        case 721:
        case 731:
        case 741:
        case 751:
        case 761:
        case 762:
        case 771:
        case 781:
          setImage(fog);
          document.querySelector('body').classList.add('fog');
          document
            .querySelector('body')
            .classList.remove('sunny', 'cloudy', 'rain', 'storm', 'snow');
          break;
        case 800:
          setImage(sun);
          document.querySelector('body').classList.add('sunny');
          document.querySelector('body').classList.remove('snow', 'cloudy', 'rain', 'storm', 'fog');
          break;
        case 801:
          setImage(partly_cloudy);
          document.querySelector('body').classList.add('cloudy');
          document.querySelector('body').classList.remove('sunny', 'snow', 'rain', 'storm', 'fog');
          break;
        case 802:
          setImage(cloudy);
          document.querySelector('body').classList.add('cloudy');
          document.querySelector('body').classList.remove('sunny', 'snow', 'rain', 'storm', 'fog');
          break;
        case (803, 804):
          setImage(clouds);
          document.querySelector('body').classList.add('cloudy');
          document.querySelector('body').classList.remove('sunny', 'snow', 'rain', 'storm', 'fog');
          break;
        default:
          document.querySelector('body').classList.add('sunny');
          document.querySelector('body').classList.remove('sunny', 'snow', 'rain', 'storm', 'fog');
          setImage(sun);
          break;
      }
    }

    if (typeof weatherInfo.weather !== 'undefined') {
      setDegree(weatherInfo.main.temp);
    }

    if (degreeIndex === 1) {
      setDegree(weatherInfo.main.temp * 1.8 + 32);
    } else if (degreeIndex === 0) {
      setDegree(weatherInfo.main.temp);
    }
  }, [setDegree, degreeIndex, weatherInfo]);
  return (
    <div>
      {typeof weatherInfo.weather !== 'undefined' ? (
        <div className="weather-block-wrapper">
          <div className="weather-block">
            <div className="weather-ico">
              <img src={image} alt="weather_ico" />
            </div>
            <div className="weather-number">{Math.floor(degree)}º</div>
          </div>
          <div className="weather-description">{weatherInfo.weather[0].description}</div>
          <div className="weather-feels-like">
            Ощущается как {Math.floor(weatherInfo.main.feels_like)}º
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

// Math.floor(weatherInfo.main.temp)
