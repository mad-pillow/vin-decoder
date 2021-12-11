import "./app.scss";
import React, { Component } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import VinService from "../../services/VinService";

class App extends Component {
  constructor() {
    super();

    this.vinService = new VinService();
    this.handleVariables();

    this.state = {
      activeVIN: "",
      VINList: JSON.parse(localStorage.getItem("VINList")) || [null, null, null, null, null],
      carDataList: {},
      fetchCarDataMessage: "",
      carDataFetching: false,
      variables: [],
      fetchVariablesMessage: "",
      variablesFetching: true,
    }
  }

  handleVariables = () => {
    this.vinService.getVariables().then(data => {
      this.setState({variables: data.variables, fetchVariablesMessage: data.message, variablesFetching: false});
    });
  }

  handleCarInfo = (vin) => {
    this.setState({ carDataFetching: true });

    this.vinService.getCarData(vin).then(data => {
      let carDataListClone = JSON.parse(JSON.stringify(this.state.carDataList));

      carDataListClone[vin] = data.carData;
      carDataListClone = Object.fromEntries(Object.entries(carDataListClone).slice(-5));
      this.setState({ carDataList: carDataListClone, fetchCarDataMessage: data.message, carDataFetching: false });
    });
  }

  handleVINList = (VINListClone) => {
    localStorage.setItem("VINList", JSON.stringify(VINListClone));
    this.setState({ VINList: VINListClone });
  }

  handleActiveVIN = (activeVIN) => {
    this.setState({ activeVIN });
    this.handleCarInfo(activeVIN);
  }

  handleVINListChose = (e) => {
    const listItemId = e.target.dataset.value;
    let VINListClone = this.state.VINList;

    if (!listItemId || listItemId === "Empty slot") {
      return;
    }

    VINListClone = VINListClone.filter(item => item !== listItemId);
    VINListClone.unshift(listItemId);

    localStorage.setItem("VINList", JSON.stringify(VINListClone));
    this.setState({ VINList: VINListClone });
    this.handleActiveVIN(VINListClone[0]);
  }
  
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Main
          infoCarData={this.state.carDataList[this.state.activeVIN]}
          infoVariables={this.state.variables}
          fetchVariablesMessage={this.state.fetchVariablesMessage}
          fetchCarDataMessage={this.state.fetchCarDataMessage}
          variablesFetching={this.state.variablesFetching}
          carDataFetching={this.state.carDataFetching}
          handleVINList={this.handleVINList}
          handleActiveVIN={this.handleActiveVIN}
          handleVINListChose={this.handleVINListChose}
          VINList={this.state.VINList} />
      </div>
    );
  }  
}

export default App;