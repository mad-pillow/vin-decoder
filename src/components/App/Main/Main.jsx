import './main.scss';

export default function Main() {
  return (
    <main className="main-container">
      <div className="vin-code__container">
        <div className="vin-code__request-block">
          <form className="vin-code__request-form">
            <input type="text" className="vin-code__request-input" maxLength="17" placeholder="Enter VIN"/>
            <button type="submit" className="vin-code__request-btn">Request VIN</button>
          </form>
        </div>
        <div className="vin-code__hystory-block">
          <ul className="vin-code__hystory-list">
            <li className="vin-code__hystory-item">WVWBP7AN4DE531881</li>
            <li className="vin-code__hystory-item">WVWBP7AN4DE531882</li>
            <li className="vin-code__hystory-item">WVWBP7AN4DE531883</li>
            <li className="vin-code__hystory-item">WVWBP7AN4DE531884</li>
            <li className="vin-code__hystory-item">WVWBP7AN4DE531885</li>
          </ul>
        </div>
      </div>
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