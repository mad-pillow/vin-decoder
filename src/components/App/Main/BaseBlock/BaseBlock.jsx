import InfoBlock from "../../../Shared/InfoBlock/InfoBlock";
import VinCodeBlock from "../VinCodeBlock/VinCodeBlock";

export default function BaseBlock(props) {
  return (
    <>
      <VinCodeBlock {...props}/>
      <InfoBlock />
    </>
  )
}