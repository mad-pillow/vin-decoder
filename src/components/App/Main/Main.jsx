import './main.scss';
import VinCodeBlock from './VinCodeBlock/VinCodeBlock';

export default function Main() {
  return (
    <main className="main-container">
      <VinCodeBlock/>
      <div className="car-info__container">
        <table className="car-info__table">
          <tr className="car-info__row">
            <th className="car-info__header">Variable</th>
            <th className="car-info__header">Value</th>
          </tr>
          <tr className="car-info__row">
            <td className="car-info__data">Variable 1</td>
            <td className="car-info__data">Value 1</td>
          </tr>
          <tr className="car-info__row">
            <td className="car-info__data">Variable 2</td>
            <td className="car-info__data">Value 2</td>
          </tr>
          <tr className="car-info__row">
            <td className="car-info__data">Variable 2</td>
            <td className="car-info__data">Value 2</td>
          </tr>
        </table>
      </div>
    </main>
  )
}