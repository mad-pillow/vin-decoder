import React from "react";

export const globalState = {
  activeVin: "",
  vinList: [null, null, null, null, null],
  carDataList: {},
  fetchCarDataMessage: "",
  carDataFetching: null,
  variables: [],
  fetchVariablesMessage: "",
  variablesFetching: null,
  handleVinList: () => {},
  handleActiveVin: () => {},
  handleVinListChoise: () => {},
  handleCarDataList: () => {},
  preventCarInfoFetchMsg: () => {},
  preventVariablesFetchMsg: () => {}
};

export const GlobalContext = React.createContext();
