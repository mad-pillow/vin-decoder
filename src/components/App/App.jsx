import "./app.scss";
import React, { Component } from "react";
import Header from "./Header";
import VinService from "../../services/VinService";
import { GlobalContext, globalState } from "../../contexts/context";
import BaseBlock from './BaseBlock';
import Variables from './Variables';
import { Routes, Route } from "react-router-dom";
import VariableDetails from './Variables/VariableDetails';

class App extends Component {
  constructor() {
    super();

    this.vinService = new VinService();

    this.state = {
      ...globalState,
      vinList: JSON.parse(localStorage.getItem("vinList")) || [null, null, null, null, null],
      carDataList: JSON.parse(localStorage.getItem("carDataList")) || {},
      handleVinList: this.handleVinList,
      handleActiveVin: this.handleActiveVin,
      handleVinListChoise: this.handleVinListChoise,
      handleCarDataList: this.handleCarDataList,
      preventCarInfoFetchMsg: this.preventCarInfoFetchMsg,
      preventVariablesFetchMsg: this.preventVariablesFetchMsg,
    };
  }

  componentDidMount() {
    this.initVariables();
  }

  initVariables = () => {
    this.setState({ variablesFetching: true });
    
    this.vinService.getVariables().then(data => {
      this.setState({variables: data.variables, fetchVariablesMessage: data.message, variablesFetching: false});
    });
  }

  preventVariablesFetchMsg = () => {
    this.setState({ variablesFetching: null });
  }

  handleCarInfo = (vin) => {
    if (this.state.vinList.includes(vin)) {
      return;
    }

    this.setState({ carDataFetching: true });

    this.vinService.getCarData(vin).then(data => {
      let carDataListClone = JSON.parse(JSON.stringify(this.state.carDataList));

      carDataListClone[vin] = data.carData;
      localStorage.setItem("carDataList", JSON.stringify(carDataListClone));
      this.setState({ carDataList: carDataListClone, fetchCarDataMessage: data.message, carDataFetching: false });
    });
  }

  preventCarInfoFetchMsg = () => {
    this.setState({ carDataFetching: null });
  }

  handleCarDataList = (vin) => {
    let carDataListClone = JSON.parse(JSON.stringify(this.state.carDataList));
    delete carDataListClone[vin];
    this.setState({ carDataList: carDataListClone });
  }

  handleVinList = (vinListClone) => {
    localStorage.setItem("vinList", JSON.stringify(vinListClone));
    this.setState({ vinList: vinListClone });
  }

  handleActiveVin = (activeVin) => {
    this.setState({ activeVin });
    this.handleCarInfo(activeVin);
  }

  handleVinListChoise = (e) => {
    const listItemId = e.target.dataset.value;
    let VINListClone = this.state.vinList;

    if (!listItemId || listItemId === "Empty slot") {
      return;
    }

    VINListClone = VINListClone.filter(item => item !== listItemId);
    VINListClone.unshift(listItemId);

    localStorage.setItem("vinList", JSON.stringify(VINListClone));
    this.setState({ vinList: VINListClone });
    this.handleActiveVin(VINListClone[0]);
  }
  
  render() {
    return (
      <div className="wrapper">
        <Header />
          <main className="main-container">
            <GlobalContext.Provider value = {this.state}>
              <Routes>
                <Route exact path="/" element={<BaseBlock />} />
                <Route exact path="/variables" element={<Variables />} />
                <Route exact path="/variables/:id" element={<VariableDetails />}/>
              </Routes>
            </GlobalContext.Provider>
          </main>
      </div>
    );
  }
}

export default App;