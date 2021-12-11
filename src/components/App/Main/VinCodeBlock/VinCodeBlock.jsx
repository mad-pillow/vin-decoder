import './vinCodeBlock.scss';
import React, { Component, createRef } from 'react';

export default class VinCodeBlock extends Component {
  constructor(props) {
    super(props);

    this.VINInputRef = createRef();

    this.state = {
      currentVIN: "",
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.VINInputRef.current.focus();
    this.VINInputRef.current.value = "";

    const VINListClone = [...this.props.VINList];

    VINListClone.unshift(this.state.currentVIN);
    VINListClone.splice(5);

    this.props.handleVINList(VINListClone);
    this.props.handleActiveVIN(this.state.currentVIN);
  }

  handleChange = (e) => {
    this.setState({ currentVIN: e.target.value });
  }

  render() {
    const VINNodesList = this.props.VINList.map((vin, index) => {
      const VINNodeText = vin ? vin : "Empty slot";
      
      return <li
        key={index}
        data-value={VINNodeText}
        className="vin-code__history-item"
        onClick={this.props.handleVINListChose}>{VINNodeText}</li>;
    });

    return (
      <div className="vin-code__container">
        <div className="vin-code__request-block">
          <form className="vin-code__request-form" onSubmit={this.handleSubmit}>
            <input type="text"
              className="vin-code__request-input"
              ref={this.VINInputRef}
              minLength="17"
              maxLength="17"
              placeholder="Enter VIN"
              onChange={this.handleChange} />
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