import React, { useContext, useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { ClubContext } from "../Components/Context/ClubContext";
import ClubsAPIService from "../Services/clubs-api-service";
import "../Components/Clubs/ClubsListGrid.css";
import ClubsListGrid from "../Components/Clubs/ClubsListGrid";

export default function ClubListPage() {
  const { clubs, setClubs } = useContext(ClubContext);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("use Effect called");

    ClubsAPIService.getAllClubs().then(setClubs).catch(setError);

  }, []);

  const clubItems = clubs.map((club) => (
    <div className="ClubsListGrid__club-details" key={club.club_id}>
      <ClubsListGrid club={club} />
    </div>
  ));

  return (
    <>
     <section>
        <div>
          <NavLink to='/addClub'>
            <div className="button">
              Add Club
            </div>
          </NavLink>
        </div>
        <div className="ClubsListGrid">
          <div className="ClubsListGrid__header">
            <div className="ClubsListGrid__clubName">Club</div>
            <div className="ClubsListGrid__stadiumName">Stadium</div>
            <div className="ClubsListGrid__location">Located</div>
            <div className="ClubsListGrid__inception">Founded</div>
            {/* <div className="ClubsListGrid__currentUSMNTPlayer">
              Current USMNT Player
            </div> */}
            <div className="ClubsListGrid__clubImage">Club Icon</div>
          </div>
          <div className="ClubsListGrid__clubs">{clubItems}</div>
        </div>
      </section>
    </>
  );
}