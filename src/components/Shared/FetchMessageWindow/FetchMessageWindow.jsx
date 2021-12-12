import "./fecthMessageWindow.scss";

export default function FetchMessageWindow({ fetchMessage, isFetching}) {
  if (isFetching === null) {
    return null;
  }

  return (
    <div className="fetch-message__container">
      <p className="fetch-message__message">{fetchMessage}</p>
    </div>
  )
}