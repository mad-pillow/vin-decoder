import InfoBlock from '../../Shared/InfoBlock';
import Spinner from '../../Shared/Spinner';
import VinCodeBlock from '../VinCodeBlock';
import FetchMessageWindow from '../../Shared/FetchMessageWindow';
import { useVehicleContext } from '../../../contexts/VehicleContext';

export default function BaseBlock() {
  return (
    <>
      <VinCodeBlock />
      <InfoBlockContainer />
    </>
  );
}

function InfoBlockContainer() {
  const { fetchCarDataMessage, isCarDataFetching, activeVin, carDataList, closeFetchCarDataMessage } =
    useVehicleContext();

  if (isCarDataFetching) {
    return <Spinner />;
  }

  return (
    <>
      <InfoBlock info={carDataList[activeVin]} isNavigable={false} />
      <FetchMessageWindow
        fetchMessage={fetchCarDataMessage}
        isFetching={isCarDataFetching}
        closeWindow={closeFetchCarDataMessage}
      />
    </>
  );
}
