import React, { createContext, useReducer } from "react";
import LeaguesReducer from "./LeaguesReducer";

export const LeagueContext = createContext(null);

export const LeagueProvider = ({ children }) => {
  const [leagues, dispatchLeagues] = useReducer(LeaguesReducer, []);

  const setLeagues = (Leagues) => {
    dispatchLeagues({
      type: "SET_LEAGUES",
      payload: Leagues,
    });
  };

  const updateLeague = (league) => {
    dispatchLeagues({
      type: "UPDATE_LEAGUES",
      payload: league,
    });
  };

  return (
    <LeagueContext.Provider
      value={{
        leagues: leagues,
        setLeagues,
        updateLeague,
      }}
    >
      {children}
    </LeagueContext.Provider>
  );

}