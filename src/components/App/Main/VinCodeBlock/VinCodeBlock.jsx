import './vinCodeBlock.scss';
import React, { Component, createRef } from 'react';

export default class VinCodeBlock extends Component {
  constructor(props) {
    super(props);

    this.VINInputRef = createRef();

    this.state = {
      currentVIN: "",
      VINList: JSON.parse(localStorage.getItem("VINList")) || [undefined, undefined, undefined, undefined, undefined],
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.VINInputRef.current.focus();
    this.VINInputRef.current.value = "";

    const VINList = [...this.state.VINList];

    VINList.unshift(this.state.currentVIN);
    VINList.splice(5);

    localStorage.setItem("VINList", JSON.stringify(VINList));
    this.setState({ VINList: VINList });
  }

  handleChange = (e) => {
    this.setState({ currentVIN: e.target.value });
  }

  handleVINListChose = (e) => {
    const listItemId = e.target.id;
    let VINList = this.state.VINList;

    if (!listItemId || listItemId === "Empty slot") {
      return;
    }

    VINList = VINList.filter(item => item !== listItemId);
    VINList.unshift(listItemId);

    localStorage.setItem("VINList", JSON.stringify(VINList));
    this.setState({ VINList: VINList });
  }

  render() {
    const VINNodesList = this.state.VINList.map((vin, index) => {
      const VINNodeText = vin ? vin : "Empty slot";
      
      return <li
        key={index}
        id={VINNodeText}
        className="vin-code__hystory-item"
        onClick={this.handleVINListChose}>{VINNodeText}</li>;
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
        <div className="vin-code__hystory-block">
          <ul className="vin-code__hystory-list">
            {VINNodesList}
          </ul>
        </div>
      </div>
    )
  }
} 