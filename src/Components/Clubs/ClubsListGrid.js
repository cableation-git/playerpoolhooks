import React from "react";
import { NavLink } from "react-router-dom";

export default function ClubsListGrid(props) {

  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

  return (
    <NavLink to={`/clubs/${props.club.club_id}`}>
      <div className="ClubsListGrid__clubName"> {props.club.club_name.toProperCase()}, {props.club.leagueName.toProperCase()}</div>
      <div className="ClubsListGrid__stadiumName"> {props.club.stadium_name.toProperCase()}</div>
      <div className="ClubsListGrid__location"> {props.club.city.toProperCase()}, {props.club.country.toUpperCase()}</div>
      <div className="ClubsListGrid__inception"> {props.club.inception}</div>      
      <div className="ClubsListGrid__clubImage">
          <img
            src={props.club.icon_url}
            alt={props.club.club_name}
          />
        </div>
    </NavLink>
  );
}
