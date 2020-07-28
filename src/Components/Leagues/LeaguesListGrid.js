import React from "react";
import { NavLink } from "react-router-dom";
import "./LeaguesListGrid.css";
import "../Shared/Shared.css"

export default function LeaguesListGrid(props) {

  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

  return (
    <NavLink to={`/leagues/${props.league.league_id}`}>
      <div className="LeaguesListGrid__leagueName"> {props.league.league_name.toProperCase()}</div>
      <div className="LeaguesListGrid__country"> {props.league.country}</div>
      <div className="LeaguesListGrid__inception"> {props.league.inception}</div>
    </NavLink>
  );
}
