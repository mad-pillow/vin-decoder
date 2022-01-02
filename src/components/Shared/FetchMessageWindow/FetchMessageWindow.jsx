import './fecthMessageWindow.scss';

export default function FetchMessageWindow({ fetchMessage, isFetching, closeWindow }) {
  if (isFetching === null) {
    return null;
  }

  return (
    <div className="fetch-message__container" onClick={closeWindow}>
      <span className="fetch-message__close-btn">&#10060;</span>
      <p className="fetch-message__message">{fetchMessage}</p>
    </div>
  );
}
