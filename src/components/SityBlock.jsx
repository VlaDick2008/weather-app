import React from 'react';

import locationImg from '../img/location.svg';

function SityBlock({ updateCityData, cici, updatePositionData }) {
  const changeSityBtn = React.useRef();
  const [inputValue, setInputValue] = React.useState(cici);

  const success = (position) => {
    updatePositionData(position);
  };

  const handleChange = () => {
    setInputValue(changeSityBtn.value);
  };

  const removeDisabled = () => {
    changeSityBtn.current.removeAttribute('disabled');
  };

  return (
    <div className="sity-block">
      <input
        value={inputValue}
        placeholder="Ваш город здесь..."
        type="text"
        onChange={() => {
          handleChange();
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            updateCityData(changeSityBtn.current.value);
          }
        }}
        ref={changeSityBtn}
        disabled
        className="sity-name"
        itemID="sity-name"
      />
      <div className="change-sity-block">
        <div
          onClick={() => {
            removeDisabled();
          }}
          className="change-sity">
          Сменить город
        </div>
        <img className="position-logo" src={locationImg} alt="" />
        <div
          onClick={() => {
            navigator.geolocation.getCurrentPosition(success);
            setInputValue(cici);
          }}
          className="your-position">
          Моё местоположение
        </div>
      </div>
    </div>
  );
}

export default SityBlock;
