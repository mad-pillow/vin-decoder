import './vinCodeBlock.scss';
import React, { createRef, useContext, useState } from 'react';
import { GlobalContext } from '../../../contexts/context';

export default function VinCodeBlock() {
  const VINInputRef = createRef();
  const [currentVin, setCurrentVin] = useState('');
  const [isVinCorrect, setIsVinCorrect] = useState(true);

  const { vinList, handleActiveVin, handleCarDataList, handleVinList, handleVinListChoise } = useContext(GlobalContext);
  const vinRegex = /^([A-Z0-9])*$/gi;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (vinRegex.test(currentVin)) {
      setIsVinCorrect(true);

      handleActiveVin(currentVin);

      let vinListClone = [...vinList];
      const vinToBeDeleted = vinListClone[vinListClone.length - 1];

      if (vinList.includes(currentVin)) {
        vinListClone = vinListClone.filter(vin => vin !== currentVin);
      } else {
        handleCarDataList(vinToBeDeleted);
      }

      vinListClone.unshift(currentVin);
      vinListClone.splice(5);

      handleVinList(vinListClone);

      VINInputRef.current.focus();
      VINInputRef.current.value = "";
    } else {
      setIsVinCorrect(false);
    }
  }

  const handleChange = (e) => {
    if (vinRegex.test(e.target.value)) { 
      setIsVinCorrect(true);
    } else {
      setIsVinCorrect(false);
    }
    setCurrentVin(e.target.value.toUpperCase());
  }
  
  const vinNodesList = vinList.map((vin, index) => {
    const vinNodeText = vin ? vin : "Empty slot";
    
    return <li
      key={index}
      data-value={vinNodeText}
      className="vin-code__history-item"
      onClick={(e) => {
        handleVinListChoise(e);
        setIsVinCorrect(true);
      }
    }> { vinNodeText }</li >;
  });

  const vinInputClassName = isVinCorrect ? "vin-code__request-form" : "vin-code__request-form vin-code__request-form--wrong";


  return (
    <div className="vin-code__container">
      <div className="vin-code__request-block">
        <form className={vinInputClassName} onSubmit={handleSubmit}>
          <input type="text"
            className="vin-code__request-input"
            ref={VINInputRef}
            minLength="17"
            maxLength="17"
            placeholder="Enter VIN code"
            onChange={handleChange} />
          <button type="submit" className="vin-code__request-btn">Request VIN</button>
        </form>
      </div>
      <div className="vin-code__history-block">
        <ul className="vin-code__history-list">
          {vinNodesList}
        </ul>
      </div>
    </div>
  )  
} 