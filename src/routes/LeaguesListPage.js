import React, { useContext, useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import LeaguesAPIService from "../Services/leagues-api-service";
import { LeagueContext } from "../Components/Context/LeagueContext";
import "../Components/Leagues/LeaguesListGrid.css";
import "../Components/Shared/Shared.css"
import LeaguesListGrid from "../Components/Leagues/LeaguesListGrid";


export default function LeaguesListPage() {
  const { leagues, setLeagues } = useContext(LeagueContext);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("use Effect called");

    LeaguesAPIService.getAllLeagues().then(setLeagues).catch(setError);

  }, []);

  const leagueItems = leagues.map((league) => (
    <div className="LeaguesListGrid__league-details" key={league.league_id}>
      <LeaguesListGrid league={league} />
    </div>
  ));

  return (
    <>    
      <section>
        <div className="LeaguesListGrid">
          <div className="LeaguesListGrid__header">
            <div className="LeaguesListGrid__leagueName">League</div>
            <div className="LeaguesListGrid__country">Country</div>
            <div className="LeaguesListGrid__inception">Founded</div>            
          </div>
          <div className="LeaguesListGrid__leagues">{leagueItems}</div>
        </div>
      </section>   
     
    </>
  );
}