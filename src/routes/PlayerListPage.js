import React, { useContext, useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { PlayerContext } from "../Components/Context/PlayerContext";
import PlayersAPIService from "../Services/players-api-service";
import "../Components/Players/PlayersListGrid.css";
import PlayersListGrid from "../Components/Players/PlayersListGrid";

export default function PlayerListPage() {
  const { players, setPlayers } = useContext(PlayerContext);
  const [error, setError] = useState("");
  console.log("players in listpage", players);

  useEffect(() => {
    console.log("use Effect called");

    PlayersAPIService.getPlayerInfo().then(setPlayers).catch(setError);
  }, []);

  const playerItems = players.map((player) => (
    <div className="PlayersListGrid__player-details" key={player.player_id}>
      <PlayersListGrid player={player} />
    </div>
  ));

  return (
    <>
      <section>
        <div>
          <NavLink to='/addPlayer'>
            <div className="button">
              Add Player
            </div>
          </NavLink>
        </div>
        <div className="PlayersListGrid">
          <div className="PlayersListGrid__header">
            <div className="PlayersListGrid__name">Player</div>
            <div className="PlayersListGrid__birthDate">Birthday</div>
            <div className="PlayersListGrid__birthPlace">Born In</div>
          </div>
          <div className="PlayersListGrid__players">{playerItems}</div>
        </div>
      </section>
    </>
  );
}
