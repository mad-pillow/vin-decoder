import './infoBlock.scss';

export default function InfoBlock() {
  return (
    <div className="info__container">
      <table className="info__table">
        <tbody>
          <tr className="info__row">
            <th className="info__header">Variable</th>
            <th className="info__header">Value</th>
          </tr>
          <tr className="info__row">
            <td className="info__data">Variable 1</td>
            <td className="info__data">Value 1</td>
          </tr>
          <tr className="info__row">
            <td className="info__data">Variable 2</td>
            <td className="info__data">Value 2</td>
          </tr>
          <tr className="info__row">
            <td className="info__data">Variable 2</td>
            <td className="info__data">Value 2</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}