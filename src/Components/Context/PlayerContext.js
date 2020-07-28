import React, { createContext, useReducer } from "react";
import PlayersReducer from "./PlayersReducer";
import GeneralReducer from './GeneralReducer';

export const PlayerContext = createContext(null);

export const PlayerProvider = ({ children }) => {
  const [players, dispatchPlayers] = useReducer(PlayersReducer, []);
  const [error, dispatchGeneral] = useReducer(GeneralReducer, []);

  const setError = (error) => {
    dispatchGeneral({
      type: "SET_ERROR",
      payload: error,
    });
  };

  const setPlayers = (players) => {
    dispatchPlayers({
      type: "SET_PLAYERS",
      payload: players,
    });
  };

  const addPlayer = (player) => {
   
    const newPlayer = {
      player_id: player.player_id,
      first_name: player.first_name,
      last_name: player.last_name,
      birth_date: player.birth_date,
      height: player.height,
      birth_city: player.birth_city,
      birth_state: player.birth_state,
      birth_country: player.birth_country,
      image_url: player.image_url,
    };

    dispatchPlayers({
      type: "ADD_PLAYERS",
      payload: newPlayer,
    });

  };

  const updatePlayer = (player) => {
    dispatchPlayers({
      type: "UPDATE_PLAYERS",
      payload: player,
    });
  };

  return (
    <PlayerContext.Provider
      value={{
        error: error,
        setError,
        players: players,
        setPlayers,
        updatePlayer,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
