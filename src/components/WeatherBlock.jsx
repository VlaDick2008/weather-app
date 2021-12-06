import React from 'react';
import sun from '../img/sun.svg';
import cloudy from '../img/cloudy.svg';
import clouds from '../img/clouds.svg';
import partly_cloudy from '../img/partly_cloudy.svg';
import rain from '../img/rain.svg';
import strom from '../img/strom.svg';
import snow from '../img/snow.svg';
import fog from '../img/fog.svg';
import drizzle from '../img/drizzle.svg';

export default function WeatherBlock({ degreeIndex, weatherInfo }) {
  const weatherImage = React.useRef();
  const [degree, setDegree] = React.useState('');
  const [image, setImage] = React.useState('');

  React.useLayoutEffect(() => {
    if (typeof weatherInfo.weather !== 'undefined') {
      switch (weatherInfo.weather[0].id) {
        case 200:
        case 201:
        case 202:
        case 210:
        case 211:
        case 212:
        case 221:
        case 230:
        case 231:
        case 232:
          setImage(strom);
          document.querySelector('body').classList.add('storm');
          weatherImage.current.classList.add('stormImg');
          weatherImage.current.classList.remove(
            'cloudyImg',
            'fogImg',
            'snowImg',
            'rainImg',
            'drizzleImg',
          );
          document
            .querySelector('body')
            .classList.remove('sunny', 'cloudy', 'rain', 'storm', 'fog', 'drizzle');
          break;
        case 300:
        case 301:
        case 302:
        case 310:
        case 311:
        case 312:
        case 313:
        case 314:
        case 321:
        case 500:
        case 501:
        case 502:
          setImage(drizzle);
          document.querySelector('body').classList.add('drizzle');
          weatherImage.current.classList.add('drizzleImg');
          weatherImage.current.classList.remove(
            'cloudyImg',
            'fogImg',
            'snowImg',
            'rainImg',
            'stormImg',
          );
          document
            .querySelector('body')
            .classList.remove('sunny', 'cloudy', 'rain', 'storm', 'fog');
          break;
        case 511:
          setImage(snow);
          document.querySelector('body').classList.add('snow');
          weatherImage.current.classList.add('snowImg');
          weatherImage.current.classList.remove(
            'cloudyImg',
            'fogImg',
            'rainImg',
            'drizzleImg',
            'stormImg',
          );
          document
            .querySelector('body')
            .classList.remove('sunny', 'cloudy', 'rain', 'storm', 'fog', 'drizzle');
          break;
        case 503:
        case 504:
        case 520:
        case 521:
        case 522:
        case 531:
          setImage(rain);
          document.querySelector('body').classList.add('rain');
          weatherImage.current.classList.add('rainImg');
          weatherImage.current.classList.remove(
            'cloudyImg',
            'fogImg',
            'snowImg',
            'drizzleImg',
            'stormImg',
          );
          document
            .querySelector('body')
            .classList.remove('sunny', 'cloudy', 'storm', 'fog', 'drizzle');
          break;
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
          weatherImage.current.classList.add('snowImg');
          weatherImage.current.classList.remove(
            'cloudyImg',
            'fogImg',
            'rainImg',
            'drizzleImg',
            'stormImg',
          );
          document
            .querySelector('body')
            .classList.remove('sunny', 'cloudy', 'rain', 'storm', 'fog', 'drizzle');
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
          weatherImage.current.classList.add('fogImg');
          weatherImage.current.classList.remove(
            'cloudyImg',
            'snowImg',
            'rainImg',
            'drizzleImg',
            'stormImg',
          );
          document
            .querySelector('body')
            .classList.remove('sunny', 'cloudy', 'rain', 'storm', 'snow', 'drizzle');
          break;
        case 800:
          setImage(sun);
          document.querySelector('body').classList.add('sunny');
          weatherImage.current.classList.add('sunnyImg');
          weatherImage.current.classList.remove(
            'cloudyImg',
            'fogImg',
            'snowImg',
            'rainImg',
            'drizzleImg',
            'stormImg',
          );
          document
            .querySelector('body')
            .classList.remove('snow', 'cloudy', 'rain', 'storm', 'fog', 'drizzle');
          break;
        case 801:
          setImage(partly_cloudy);
          document.querySelector('body').classList.add('cloudy');
          weatherImage.current.classList.add('cloudyImg');
          weatherImage.current.classList.remove(
            'fogImg',
            'snowImg',
            'rainImg',
            'drizzleImg',
            'stormImg',
          );
          document
            .querySelector('body')
            .classList.remove('sunny', 'snow', 'rain', 'storm', 'fog', 'drizzle');
          break;
        case 802:
          setImage(cloudy);
          document.querySelector('body').classList.add('cloudy');
          weatherImage.current.classList.add('cloudyImg');
          weatherImage.current.classList.remove(
            'fogImg',
            'snowImg',
            'rainImg',
            'drizzleImg',
            'stormImg',
          );
          document
            .querySelector('body')
            .classList.remove('sunny', 'snow', 'rain', 'storm', 'fog', 'drizzle');
          break;
        case 803:
        case 804:
          setImage(clouds);
          document.querySelector('body').classList.add('cloudy');
          weatherImage.current.classList.add('cloudyImg');
          weatherImage.current.classList.remove(
            'fogImg',
            'snowImg',
            'rainImg',
            'drizzleImg',
            'stormImg',
          );
          document
            .querySelector('body')
            .classList.remove('sunny', 'snow', 'rain', 'storm', 'fog', 'drizzle');
          break;
        default:
          document.querySelector('body').classList.add('sunny');
          weatherImage.current.classList.add('sunnyImg');
          weatherImage.current.classList.remove(
            'cloudyImg',
            'fogImg',
            'snowImg',
            'rainImg',
            'drizzleImg',
            'stormImg',
          );
          document
            .querySelector('body')
            .classList.remove('snow', 'rain', 'storm', 'fog', 'drizzle');
          setImage(sun);
          break;
      }
    }

    if (typeof weatherInfo.weather !== 'undefined') {
      setDegree(weatherInfo.main.temp);

      if (degreeIndex === 1) {
        setDegree(weatherInfo.main.temp * 1.8 + 32);
      } else if (degreeIndex === 0) {
        setDegree(weatherInfo.main.temp);
      }
    }
  }, [setDegree, degreeIndex, weatherInfo]);
  return (
    <div>
      {typeof weatherInfo.weather !== 'undefined' ? (
        <div className="weather-block-wrapper">
          <div className="weather-block">
            <div className="weather-ico">
              <img ref={weatherImage} src={image} alt="weather_ico" />
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
