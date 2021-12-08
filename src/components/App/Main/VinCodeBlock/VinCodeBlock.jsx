import './vinCodeBlock.scss';

export default function VinCodeBlock() {
  return (
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
  )
} 