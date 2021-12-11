import './variables.scss';
import InfoBlock from '../../Shared/InfoBlock/InfoBlock';
import Spinner from '../../Shared/Spinner/Spinner';
import FetchMessageWindow from '../../Shared/FetchMessageWindow/FetchMessageWindow';

export default function Variables({ infoVariables, variablesFetching, fetchVariablesMessage }) {
  if (variablesFetching) {
    return (
      <Spinner/>
    )
  }

  return (
    <>
      <h2 className="page-title">You can find the list of all available VIN decryption variables below:</h2>
      <InfoBlock info={infoVariables} />
      <FetchMessageWindow fetchMessage={fetchVariablesMessage}/>
    </>
  )
}
