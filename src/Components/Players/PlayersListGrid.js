import React from "react";
import { NavLink } from "react-router-dom";
import { render } from "@testing-library/react";

export default function PlayersListGrid(props) {

  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

  const getBirthPlace = () => {
    let birthPlace = '';
    if (props.player.birth_state === "") {
      birthPlace =
        props.player.birth_city.toProperCase() + ", " + props.player.birth_country.toUpperCase();
    } else {
      birthPlace =
        props.player.birth_city.toProperCase() +
        ", " +
        props.player.birth_state.toUpperCase() +
        ", " +
        props.player.birth_country.toUpperCase();
    }

    return birthPlace;
  };
  return (
    <NavLink to={`/players/${props.player.player_id}`}>
      <div className="PlayersListGrid__name">
        {props.player.first_name.toProperCase()} {props.player.last_name.toProperCase()}
      </div>
      <div className="PlayersListGrid__birthDate">{props.player.birth_date}</div>
      <div className="PlayersListGrid__birthPlace">{getBirthPlace()}</div>
    </NavLink>
  );
}
