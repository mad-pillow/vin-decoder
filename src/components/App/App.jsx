import "./app.scss";
import React, { Component } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";

class App extends Component {
  constructor() {
    super();

    this.state = {
      activeVIN: "",
      VINList: JSON.parse(localStorage.getItem("VINList")) || [null, null, null, null, null],
    }
  }

  handleVINList = (VINListClone) => {
    localStorage.setItem("VINList", JSON.stringify(VINListClone));
    this.setState({ VINList: VINListClone });
  }

  handleVINListChose = (e) => {
    const listItemId = e.target.id;
    let VINListClone = this.state.VINList;

    if (!listItemId || listItemId === "Empty slot") {
      return;
    }

    VINListClone = VINListClone.filter(item => item !== listItemId);
    VINListClone.unshift(listItemId);

    localStorage.setItem("VINList", JSON.stringify(VINListClone));
    this.setState({ VINList: VINListClone });
  }
  
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Main handleVINList={this.handleVINList} handleVINListChose={this.handleVINListChose} VINList={this.state.VINList}/>
      </div>
    );
  }  
}

export default App;
