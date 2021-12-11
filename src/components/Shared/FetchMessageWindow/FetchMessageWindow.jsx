import "./fecthMessageWindow.scss";

export default function FetchMessageWindow({ fetchMessage }) {
  return (
    <div className="fetch-message__container">
      <p className="fetch-message__message">{fetchMessage}</p>
    </div>
  )
}