import './variables.scss';
import InfoBlock from '../../Shared/InfoBlock';
import Spinner from '../../Shared/Spinner';
import FetchMessageWindow from '../../Shared/FetchMessageWindow';
import { useEffect } from 'react';

export default function Variables({ infoVariables, variablesFetching, fetchVariablesMessage, preventVariablesFetchMsg }) {
  useEffect(() => {
    return () => {
      preventVariablesFetchMsg();
    }
  }, [preventVariablesFetchMsg]);

  if (variablesFetching) {
    return (
      <Spinner/>
    )
  }

  return (
    <>
      <h2 className="page-title">You can find the list of all available VIN decryption variables below:</h2>
      <InfoBlock info={infoVariables} isNavigable={true} />
      <FetchMessageWindow fetchMessage={fetchVariablesMessage} isFetching={variablesFetching}/>
    </>
  )
}
