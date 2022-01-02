import './variables.scss';
import InfoBlock from '../../Shared/InfoBlock';
import Spinner from '../../Shared/Spinner';
import FetchMessageWindow from '../../Shared/FetchMessageWindow';
import { useVariablesContext } from '../../../contexts/VariablesContext';

export default function Variables() {
  const { variables, fetchVariablesMessage, isVariablesFetching } = useVariablesContext();

  if (isVariablesFetching) {
    return <Spinner />;
  }

  return (
    <>
      <h2 className="page-title">You can find the list of all available VIN decryption variables below:</h2>
      <InfoBlock info={variables} isNavigable={true} />
      <FetchMessageWindow fetchMessage={fetchVariablesMessage} isFetching={isVariablesFetching} />
    </>
  );
}
