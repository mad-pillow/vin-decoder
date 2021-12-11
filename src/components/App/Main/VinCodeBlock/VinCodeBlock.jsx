import './vinCodeBlock.scss';
import React, { Component, createRef } from 'react';

export default class VinCodeBlock extends Component {
  constructor(props) {
    super(props);

    this.VINInputRef = createRef();

    this.state = {
      currentVIN: "",
      isVinCorrect: true,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const vinRegex = /^([A-Z0-9])*$/gi;
    if (vinRegex.test(this.state.currentVIN)) {
      this.setState({ isVinCorrect: true });

      this.props.handleActiveVIN(this.state.currentVIN);

      let VINListClone = [...this.props.VINList];
      const vinToBeDeleted = VINListClone[VINListClone.length - 1];

      if (this.props.VINList.includes(this.state.currentVIN)) {
        VINListClone = VINListClone.filter(vin => vin !== this.state.currentVIN);
      } else {
        this.props.handleCarDataList(vinToBeDeleted);
      }

      VINListClone.unshift(this.state.currentVIN);
      VINListClone.splice(5);

      this.props.handleVINList(VINListClone);
    } else {
      this.setState({ isVinCorrect: false });
    }

    this.VINInputRef.current.focus();
    this.VINInputRef.current.value = "";
  }

  handleChange = (e) => {
    this.setState({ currentVIN: e.target.value.toUpperCase() });
  }

  render() {
    const VINNodesList = this.props.VINList.map((vin, index) => {
      const VINNodeText = vin ? vin : "Empty slot";
      
      return <li
        key={index}
        data-value={VINNodeText}
        className="vin-code__history-item"
        onClick={(e) => {
          this.props.handleVINListChoose(e);
          this.setState({ isVinCorrect: true });
        }
  }> { VINNodeText }</li >;
    });

    const vinPlaceholder = this.state.isVinCorrect ? "Enter VIN" : "Letters and Digits only!";


    return (
      <div className="vin-code__container">
        <div className="vin-code__request-block">
          <form className="vin-code__request-form" onSubmit={this.handleSubmit}>
            <div>
              <input type="text"
                className="vin-code__request-input"
                ref={this.VINInputRef}
                minLength="17"
                maxLength="17"
                placeholder={vinPlaceholder}
                onChange={this.handleChange} />
            </div>
            <button type="submit" className="vin-code__request-btn">Request VIN</button>
          </form>
        </div>
        <div className="vin-code__history-block">
          <ul className="vin-code__history-list">
            {VINNodesList}
          </ul>
        </div>
      </div>
    )
  }
} 