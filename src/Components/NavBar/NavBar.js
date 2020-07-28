import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../NavBar/NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <header className="topnav">
        <nav className="topnav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/coaches">Coaches</NavLink>
            </li>
            <li>
              <NavLink to="/clubs">Clubs</NavLink>
            </li>
            <li>
              <NavLink to="/players">Players</NavLink>
            </li>
            <li>
              <NavLink to="/leagues">Leagues</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
