import React, { useState, useContext } from "react";
import vinService from "../services/VinService";

const VehicleContext = React.createContext();

export const useVehicleContext = () => {
  return useContext(VehicleContext);
};

export function VehicleProvider({ children }) {
  const storedVinListData = JSON.parse(localStorage.getItem("vinList"));
  const storedCarDataListData = JSON.parse(localStorage.getItem("carDataList"));

  const [activeVin, setActiveVin] = useState("");
  const [vinList, setVinList] = useState(storedVinListData || [null, null, null, null, null]);
  const [carDataList, setCarDataList] = useState(storedCarDataListData || {});
  const [fetchCarDataMessage, setFetchCarDataMessage] = useState("");
  const [isCarDataFetching, setIsCarDataFetching] = useState(null);

  const _handleCarInfo = (vin) => {
    if (vinList.includes(vin)) {
      return;
    }

    setIsCarDataFetching(true);

    vinService.getCarData(vin).then((data) => {
      let carDataListClone = JSON.parse(JSON.stringify(carDataList));

      carDataListClone[vin] = data.carData;
      localStorage.setItem("carDataList", JSON.stringify(carDataListClone));
      setCarDataList(carDataListClone);
      setFetchCarDataMessage(data.message);
      setIsCarDataFetching(false);
    });
  };

  const _handleActiveVin = (vin) => {
    setActiveVin(vin);
    _handleCarInfo(vin);
  };

  const _handleCarDataList = (vin) => {
    let carDataListClone = JSON.parse(JSON.stringify(carDataList));
    delete carDataListClone[vin];
    setCarDataList(carDataListClone);
  };

  const _handleVinList = (vinListClone) => {
    localStorage.setItem("vinList", JSON.stringify(vinListClone));
    setVinList(vinListClone);
  };

  const handleVinListChoise = (e) => {
    const listItemId = e.target.dataset.value;
    let vinListClone = vinList;

    if (!listItemId || listItemId === "Empty slot") {
      return;
    }

    vinListClone = vinListClone.filter((item) => item !== listItemId);
    vinListClone.unshift(listItemId);

    localStorage.setItem("vinList", JSON.stringify(vinListClone));
    setVinList(vinListClone);

    _handleActiveVin(vinListClone[0]);
  };

  const handleVinSubmit = (vin) => {
    _handleActiveVin(vin);

    let vinListClone = [...vinList];
    const vinToBeDeleted = vinListClone[vinListClone.length - 1];

    if (vinList.includes(vin)) {
      vinListClone = vinListClone.filter((item) => item !== vin);
    } else {
      _handleCarDataList(vinToBeDeleted);
    }

    vinListClone.unshift(vin);
    vinListClone.splice(5);

    _handleVinList(vinListClone);
  };

  return (
    <VehicleContext.Provider
      value={{
        fetchCarDataMessage,
        isCarDataFetching,
        activeVin,
        carDataList,
        vinList,
        handleVinSubmit,
        handleVinListChoise
      }}>
      {children}
    </VehicleContext.Provider>
  );
}
