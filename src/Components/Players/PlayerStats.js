import React from "react";
import "./PlayerStats.css";

export default function PlayerStats(props) {
  console.log("in playerStats", props);
  return (
    <React.Fragment>
      <div className="PlayerStats__year">{props.playerStat.year}</div>
      <div className="PlayerStats__club">{props.playerStat.club}</div>
      <div className="PlayerStats__gamesPlayed">
        {props.playerStat.gamesPlayed}
      </div>
      <div className="PlayerStats__gamesStarted">
        {props.playerStat.gamesStarted}
      </div>
      <div className="PlayerStats__goals">{props.playerStat.goals}</div>
      <div className="PlayerStats__minutes">{props.playerStat.minutes}</div>
      <div className="PlayerStats__assists">{props.playerStat.assists}</div>
      <div className="PlayerStats__shots">{props.playerStat.shots}</div>
      <div className="PlayerStats__sog">{props.playerStat.sog}</div>
      <div className="PlayerStats__foulsCommitted">
        {props.playerStat.foulsCommitted}
      </div>
      <div className="PlayerStats__offsides">{props.playerStat.offsides}</div>
      <div className="PlayerStats__yellows">{props.playerStat.yellows}</div>
      <div className="PlayerStats__reds">{props.playerStat.reds}</div>
    </React.Fragment>
  );
}
