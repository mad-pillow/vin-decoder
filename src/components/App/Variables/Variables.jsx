import './variables.scss';
import InfoBlock from '../../Shared/InfoBlock/InfoBlock';
import Spinner from '../../Shared/Spinner/Spinner';
import FetchMessageWindow from '../../Shared/FetchMessageWindow/FetchMessageWindow';
import { useLayoutEffect } from 'react';

export default function Variables({ infoVariables, variablesFetching, fetchVariablesMessage, preventVariablesFetchMsg }) {
  useLayoutEffect(() => {
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
