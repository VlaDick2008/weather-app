import React from 'react';

import locationImg from '../img/location.svg';

function SityBlock({ updateCityData }) {
  const changeSityBtn = React.useRef();

  const success = (position) => {
    console.log(position);
  };

  const onButtonClick = () => {
    changeSityBtn.current.removeAttribute('disabled');
  };

  return (
    <div className="sity-block">
      <input
        defaultValue="Омск"
        type="text"
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
        <div onClick={onButtonClick} className="change-sity">
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
