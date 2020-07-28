import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { PlayerContext } from "../Components/Context/PlayerContext";
import PlayersAPIService from "../Services/players-api-service";
import "../Components/Players/Player.css";
import "../../src/Components/Players/PlayerStats.css";
import "../../src/Components/Players/PlayerCoaches.css";
import "../../src/Components/Players/PlayerClubs.css";
//import PlayerStats from "./PlayerStats";

export default function PlayerPage(props) {
  const { players } = useContext(PlayerContext);
  const [error, setError] = useState("");

  const getPlayer = players.find(
    (player) => player.player_id === Number(props.match.params.player_id)
  );

  return (
    <React.Fragment>
      <div>
        <NavLink
          className={'button'}
          to={`/updateplayer/${getPlayer.player_id}`}
        >
          Update {getPlayer.first_name}
        </NavLink>
        <NavLink
          className={'button'}
          to={`/playersClubsUpdate/${getPlayer.player_id}/${getPlayer.club_id}`}
        >
          Update Club
        </NavLink>
      </div>
      <div className="Player">
        <div className="Player__name">
          {getPlayer.first_name} {getPlayer.last_name}
          <br />
          <span className="Player__infoText">
            Currently Playing for ClubID - {getPlayer.club_id}
          </span>
        </div>
        <div className="Player__img">
          <img
            src={getPlayer.image_url}
            alt={getPlayer.first_name}
          />
        </div>
        <div className="Player__profile">
          Born - {getPlayer.birth_date}
          <br />
          Height - {getPlayer.height}
          <br />
          City - {getPlayer.birth_city}
          <br />
          State - {getPlayer.birth_state}
          <br />
          Country - {getPlayer.birth_country}
          <br />
        </div>
        <div className="Player__statsContainer">
          <div className="Player__statsContainer-header">
            Rolled-Up Player Stats
          </div>
            <div className="PlayerStats__header">
            <div className="PlayerStats__year">Year</div>
            <div className="PlayerStats__club">Club</div>
            <div className="PlayerStats__gamesPlayed">GP</div>
            <div className="PlayerStats__gamesStarted">GS</div>
            <div className="PlayerStats__goals">G</div>
            <div className="PlayerStats__minutes">Min</div>
            <div className="PlayerStats__assists">A</div>
            <div className="PlayerStats__shots">SHTS</div>
            <div className="PlayerStats__sog">SOG</div>
            <div className="PlayerStats__foulsCommitted">FC</div>
            <div className="PlayerStats__offsides">OFF</div>
            <div className="PlayerStats__yellows">Y</div>
            <div className="PlayerStats__reds">R</div>
          </div>
          {/* <div className="PlayerStats__row">
            <PlayerStats playerStat={playerStats} />
          </div> */}
        </div> 
        <div className="Player__natStatsContainer">
            Rolled Up National Team Stats
          </div>

           <div className="Player__clubsContainer">
            <div className="Player__clubsContainer-header">
              Clubs During Career
            </div>
             <div className="PlayerClubs__header">
              <div className="PlayerClubs__name">Name</div>
              <div className="PlayerClubs__league">League</div>
              <div className="PlayerClubs__division">Division</div>
              <div className="PlayerClubs__city">City</div>
              <div className="PlayerClubs__country">Country</div>
              <div className="PlayerClubs__inception">Inception</div>
            </div>
            {/* <div className="PlayerClubs__row">{playerClubItems}</div>  */}
          </div>
          <div className="Player__coachesContainer">
            <div className="Player__coachesContainer-header">
              Coaches During Career
            </div>
            <div className="PlayerCoaches__header">
              <div className="PlayerCoaches__firstName">First</div>
              <div className="PlayerCoaches__lastName">Last</div>
              <div className="PlayerCoaches__birthDate">BirthDate</div>
              <div className="PlayerCoaches__birthCountry">Born In</div>
              <div className="PlayerCoaches__currentClub">Club</div>
              <div className="PlayerCoaches__yearsAtClub">Years at Club</div>
            </div> 
            {/* <div className="PlayerCoaches__row">{playerCoachItems}</div> */}
          </div>
      </div>    
    </React.Fragment>
  );
}
