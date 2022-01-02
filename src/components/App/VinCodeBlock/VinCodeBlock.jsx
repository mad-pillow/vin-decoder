import './vinCodeBlock.scss';
import React, { createRef, useState } from 'react';
import { useVehicleContext } from '../../../contexts/VehicleContext';

export default function VinCodeBlock() {
  const vinInputRef = createRef();
  const [currentVin, setCurrentVin] = useState('');
  const [isVinCorrect, setIsVinCorrect] = useState(true);

  const { vinList, handleVinSubmit, handleVinListChoise } = useVehicleContext();
  const vinChangeRegex = /^[A-Z0-9]*$/gi;
  const vinSubmitRegex = /^[A-Z0-9]{17}$/gi;

  const handleChange = (e) => {
    const target = e.target;
    let { value } = target;
    target.value = value = value.toUpperCase();

    const vinRegex = value.length > 17 ? vinSubmitRegex : vinChangeRegex;

    if (vinRegex.test(value)) {
      setIsVinCorrect(true);
      setCurrentVin(value);
      return;
    }

    setIsVinCorrect(false);
  };

  const vinNodesList = vinList.map((vin, index) => {
    const vinNodeText = vin ? vin : 'Empty slot';

    return (
      <li
        key={index}
        data-value={vinNodeText}
        className="vin-code__history-item"
        onClick={(e) => {
          handleVinListChoise(e);
          setIsVinCorrect(true);
        }}>
        {vinNodeText}
      </li>
    );
  });

  const vinInputClassName = isVinCorrect
    ? 'vin-code__request-form'
    : 'vin-code__request-form vin-code__request-form--wrong';

  return (
    <div className="vin-code__container">
      <div className="vin-code__request-block">
        <form
          className={vinInputClassName}
          onSubmit={(e) => {
            e.preventDefault();
            if (currentVin && currentVin.length === 17) {
              handleVinSubmit(currentVin);
              vinInputRef.current.focus();
              vinInputRef.current.value = '';
            }
          }}>
          <input
            type="text"
            className="vin-code__request-input"
            ref={vinInputRef}
            minLength="17"
            maxLength="17"
            placeholder="Enter VIN code"
            onChange={handleChange}
          />
          <button type="submit" className="vin-code__request-btn" disabled={!isVinCorrect}>
            Request VIN
          </button>
        </form>
      </div>
      <div className="vin-code__history-block">
        <ul className="vin-code__history-list">{vinNodesList}</ul>
      </div>
    </div>
  );
}
