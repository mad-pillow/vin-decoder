import "./app.scss";
import React, { Component } from "react";
import Header from "./Header";
import BaseBlock from './BaseBlock';
import Variables from './Variables';
import { Routes, Route } from "react-router-dom";
import VariableDetails from './Variables/VariableDetails';
import { VariablesProvider } from "../../contexts/VariablesContext";
import { VehicleProvider } from "../../contexts/VehicleContext";

class App extends Component {
  componentWillUnmount() {
    localStorage.removeItem("storedVariablesData");
  }
  
  render() {
    return (
      <div className="wrapper">
        <Header />
          <main className="main-container">
              <Routes>
                <Route exact path="/" element={<VehicleProvider>{<BaseBlock />} </VehicleProvider>} />
                <Route exact path="/variables" element={<VariablesProvider>{<Variables />}</VariablesProvider>} />
                <Route exact path="/variables/:id" element={<VariableDetails />}/>
              </Routes>
          </main>
      </div>
    );
  }
}

export default App;