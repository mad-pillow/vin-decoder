import './infoBlock.scss';
import React from 'react';

export default function InfoBlock( props ) {
  let tableHeaders = ["Header 1", "Header 2"];
  let infoValuesRows = [];

  const { info } = props;
  
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
      return <td className="info__data" key={index} dangerouslySetInnerHTML={{__html: infoValue}}></td>
    })
    
    return (
      <tr className="info__row" key={index}>
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