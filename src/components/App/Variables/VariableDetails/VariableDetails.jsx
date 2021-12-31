import './variableDetails.scss';
import { useParams } from "react-router-dom"
import VinService from '../../../../services/VinService';
import { useState, useEffect } from 'react';
import Spinner from '../../../Shared/Spinner';

export default function VariableDetails({ infoVariables, preventVariablesFetchMsg }) {
  const { id } = useParams();
  const [variable, setVariable] = useState({});
  const [fetchingVariable, setFetchingVariable] = useState(false);

  useEffect((vin) => {
    const vinService = new VinService();
    setFetchingVariable(true);
    
    vinService.getVariableDetails(id).then(data => {
      setVariable(data);
      setFetchingVariable(false);
    })
  }, [id]);

  const variableKeys = Object.keys(variable);
  const variableItems = variableKeys.map((key, index) => {
    return (
      <tr className="details__row" key={index}>
        <td className="details__data">{key}</td>
        <td className="details__data" dangerouslySetInnerHTML={{__html: variable[key]}}></td>
      </tr>
    )
  })

  if (fetchingVariable) {
    return (
      <Spinner/>
    )
  }

  return (
    <>
      <h2 className="page-title">{`Details for the variable with Id ${id} as follows:`}</h2>
      <div className="details__container">
        <table className="details__table">
          <tbody>
            {variableItems}
          </tbody>
        </table>
      </div>
    </>
  )
}