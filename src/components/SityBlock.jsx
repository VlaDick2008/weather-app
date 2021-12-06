import React from 'react';

import locationImg from '../img/location.svg';

function SityBlock({ updateCityData, cici, updatePositionData }) {
  const changeInput = React.useRef();
  const changeSityBtn = React.useRef();
  const [inputValue, setInputValue] = React.useState(cici);
  const [position, positionChange] = React.useState('');
  const [inputState, enableInput] = React.useState(false);

  const success = (position) => {
    updatePositionData(position);
    positionChange(position);
  };

  React.useLayoutEffect(() => {
    if (typeof position.coords !== 'undefined') {
      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json&addressdetails=[0|1]`,
      )
        .then((resp) => resp.json())
        .then((result) => {
          setInputValue(result.address.city);
        });
    }
  }, [position.coords]);

  // const handleOutsideClick = (e) => {
  //   if (!e.path.includes(changeSityBtn.current || changeInput.current)) {
  //     enableInput(false);
  //     console.log(e.path);
  //   }
  // };

  React.useEffect(() => {
    if (inputState === true) {
      changeInput.current.removeAttribute('disabled');
    } else if (inputState === false) {
      changeInput.current.setAttribute('disabled', 'disabled');
    }
  }, [inputState]);

  return (
    <div className="sity-block">
      <input
        value={inputValue}
        placeholder="Ваш город здесь..."
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            updateCityData(changeInput.current.value);
            changeInput.current.setAttribute('disabled', 'disabled');
          }
        }}
        ref={changeInput}
        disabled
        className="sity-name"
        itemID="sity-name"
      />
      <div className="change-sity-block">
        <div
          ref={changeSityBtn}
          onClick={() => {
            enableInput(!inputState);
          }}
          className="change-sity">
          Сменить город
        </div>
        <img className="position-logo" src={locationImg} alt="" />
        <div
          onClick={() => {
            navigator.geolocation.getCurrentPosition(success);
          }}
          className="your-position">
          Моё местоположение
        </div>
      </div>
    </div>
  );
}

export default SityBlock;
