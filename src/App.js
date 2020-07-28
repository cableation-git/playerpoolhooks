import React, { useState, useContext, useEffect } from "react";
import { Switch } from "react-router-dom";
import PublicOnlyRoute from "./Utils/PublicRoute";
import PrivateRoute from "./Utils/PrivateRoute";
import NavBar from "../src/Components/NavBar/NavBar";
import PlayerListPage from "./routes/PlayerListPage";
import ClubListPage from "./routes/ClubListPage";
import ClubAddPage from "./routes/ClubAddPage";
import PlayerAddPage from "./routes/PlayerAddPage";
import PlayerPage from "./routes/PlayerPage";
import LeaguesListPage from "./routes/LeaguesListPage";
import PlayersClubsUpdate from "./routes/PlayersClubsUpdate";

export default function App() {

  return (
    <>
      <NavBar></NavBar>
      <Switch>
        <PublicOnlyRoute exact path="/players" component={PlayerListPage} />
        <PublicOnlyRoute exact path="/addPlayer" component={PlayerAddPage} />
        <PublicOnlyRoute
          exact
          path="/players/:player_id"
          component={(routeProps) => <PlayerPage {...routeProps} />}
        />
        <PublicOnlyRoute exact path="/clubs" component={ClubListPage} />
        <PublicOnlyRoute exact path="/addClub" component={ClubAddPage} />        
        <PublicOnlyRoute exact path="/leagues" component={LeaguesListPage} />
        <PublicOnlyRoute
          exact 
          path="/playersClubsUpdate/:player_id/:club_id"
          component={(routeProps) => <PlayersClubsUpdate 
            
            {...routeProps} />}
        />
      </Switch>
    </>
  );
}
