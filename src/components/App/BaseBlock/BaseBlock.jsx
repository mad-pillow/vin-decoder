import InfoBlock from "../../Shared/InfoBlock";
import Spinner from "../../Shared/Spinner";
import VinCodeBlock from "../VinCodeBlock";
import FetchMessageWindow from "../../Shared/FetchMessageWindow";
import { useEffect, useContext } from "react";
import { GlobalContext } from "../../../contexts/context";

export default function BaseBlock() {
  const { preventCarInfoFetchMsg } = useContext(GlobalContext);

  useEffect(() => {
    return () => {
      preventCarInfoFetchMsg();
    }
  }, [preventCarInfoFetchMsg]);

  return (
    <>
      <VinCodeBlock />
      <InfoBlockContainer />
    </>
  )
}

function InfoBlockContainer() {
  const { fetchCarDataMessage, carDataFetching, activeVin, carDataList } = useContext(GlobalContext);

  if (carDataFetching) {
    return (
      <Spinner/>
    )
  }

  return (
    <>
      <InfoBlock info={carDataList[activeVin]} isNavigable={true}/>
      <FetchMessageWindow fetchMessage={fetchCarDataMessage} isFetching={carDataFetching} />
    </>
  )
}