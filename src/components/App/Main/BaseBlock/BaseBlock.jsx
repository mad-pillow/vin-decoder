import InfoBlock from "../../../Shared/InfoBlock";
import Spinner from "../../../Shared/Spinner";
import VinCodeBlock from "../VinCodeBlock";
import FetchMessageWindow from "../../../Shared/FetchMessageWindow";
import { useLayoutEffect } from "react";

export default function BaseBlock(props) {

  const { preventCarInfoFetchMsg } = props;

  useLayoutEffect(() => {
    return () => {
      preventCarInfoFetchMsg();
    }
  }, [preventCarInfoFetchMsg]);

  return (
    <>
      <VinCodeBlock {...props} />
      <InfoBlockContainer {...props}/>
    </>
  )
}

function InfoBlockContainer(props) {
  if (props.carDataFetching) {
    return (
      <Spinner/>
    )
  }

  return (
    <>
      <InfoBlock info={props.infoCarData} />
      <FetchMessageWindow fetchMessage={props.fetchCarDataMessage} isFetching={props.carDataFetching} />
    </>
  )
}