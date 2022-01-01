import './variables.scss';
import InfoBlock from '../../Shared/InfoBlock';
import Spinner from '../../Shared/Spinner';
import FetchMessageWindow from '../../Shared/FetchMessageWindow';
import { useEffect, useContext } from 'react';
import { GlobalContext } from '../../../contexts/context';

export default function Variables() {
  const { variables, variablesFetching, fetchVariablesMessage, preventVariablesFetchMsg } = useContext(GlobalContext);  

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
      <InfoBlock info={variables} isNavigable={true} />
      <FetchMessageWindow fetchMessage={fetchVariablesMessage} isFetching={variablesFetching}/>
    </>
  )
}
