import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { PlayerProvider } from "./Components/Context/PlayerContext";
import App from "./App";
import { ClubProvider } from "./Components/Context/ClubContext";
import { LeagueProvider } from "./Components/Context/LeagueContext";

ReactDOM.render(
  <BrowserRouter>
    <PlayerProvider>
      <ClubProvider>
        <LeagueProvider>
          <App />
        </LeagueProvider>
      </ClubProvider>
    </PlayerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
