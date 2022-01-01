import './infoBlock.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function InfoBlock({ info, isNavigable }) {
  let tableHeaders = ["Header 1", "Header 2"];
  let infoValuesRows = [];
  let navigate = useNavigate();

  const rowIsClickable = isNavigable ? " info__row--clickable" : "";

  function navigateTo(linkId) {
    if (!isNavigable) return;

    navigate(linkId);
  }

  if (!info && !Array.isArray(info)) {
    return (
      <p>If you like to get description of a car by its VIN code enter the code above</p>
    )
  } else {
    tableHeaders = Object.keys(info[0]).map((key, index) => {
      return (
        <th key={index} className="info__header">{key}</th>
      )
    });
  }

  infoValuesRows = info.map((infoValuesRow, index) => {
    const infoValues = Object.values(infoValuesRow).map((infoValue, index) => {
      return <td className="info__data" key={index} dangerouslySetInnerHTML={{ __html: infoValue }}></td>
    });
    
    return (
      <tr className={`info__row${rowIsClickable}`} key={index} onClick={() => { navigateTo(`${infoValuesRow.Id}`) }}>
        {infoValues}
      </tr>
    )
  })

  return (
    <div className="info__container">
      <table className="info__table">
        <tbody>
          <tr className="info__row">
            {tableHeaders}
          </tr>
          {infoValuesRows}
        </tbody>
      </table>
    </div>
  )
}