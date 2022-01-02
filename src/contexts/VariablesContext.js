import React, { useState, useContext, useEffect } from "react";
import vinService from "../services/VinService";

const VariablesContext = React.createContext();

export const useVariablesContext = () => {
  return useContext(VariablesContext);
};

export function VariablesProvider({ children }) {
  const storedVariablesData = JSON.parse(localStorage.getItem("storedVariablesData"));

  const [variables, setVariables] = useState(storedVariablesData && storedVariablesData.variables);
  const [fetchVariablesMessage, setFetchVariablesMessage] = useState(
    storedVariablesData && storedVariablesData.fetchVariablesMessage
  );
  const [isVariablesFetching, setIsVariablesFetching] = useState(null);

  useEffect(() => {
    if (!storedVariablesData) {
      setIsVariablesFetching(true);

      vinService.getVariables().then((data) => {
        setVariables(data.variables);
        setFetchVariablesMessage(data.message);
        setIsVariablesFetching(false);
        localStorage.setItem(
          "storedVariablesData",
          JSON.stringify({
            variables: variables,
            fetchVariablesMessage: fetchVariablesMessage
          })
        );
      });
    }
  }, [storedVariablesData, variables, fetchVariablesMessage]);

  return (
    <VariablesContext.Provider value={{ variables, fetchVariablesMessage, isVariablesFetching }}>
      {children}
    </VariablesContext.Provider>
  );
}
