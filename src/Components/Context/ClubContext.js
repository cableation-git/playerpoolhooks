import React, { createContext, useReducer } from "react";
import ClubsReducer from "./ClubsReducer";

export const ClubContext = createContext(null);

export const ClubProvider = ({ children }) => {
  const [clubs, dispatchClubs] = useReducer(ClubsReducer, []);

  const setClubs = (clubs) => {
    dispatchClubs({
      type: "SET_CLUBS",
      payload: clubs,
    });
  };

  const updateClub = (club) => {
    dispatchClubs({
      type: "UPDATE_CLUBS",
      payload: club,
    });
  };

  return (
    <ClubContext.Provider
      value={{
        clubs: clubs,
        setClubs,
        updateClub,
      }}
    >
      {children}
    </ClubContext.Provider>
  );

}