import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useForm from "../Components/Hooks/useForm";
import ValidateError from "../Components/ValidateError/ValidateError";
import ClubsAPIService from "../Services/clubs-api-service";
import LeaguesAPIService from "../Services/leagues-api-service";
import { ClubContext } from "../Components/Context/ClubContext";
import { LeagueContext } from "../Components/Context/LeagueContext";
import "../Components/Clubs/AddClub.css";

const Required = () => <span className="form__required">*</span>;

export default function ClubAddPage() {
  const { addClubs, setError } = useContext(ClubContext);
  const { leagues, setLeagues } = useContext(LeagueContext);

  const stateSchema = {
    club_name: { value: "", error: "" },
    icon_url: { value: "", error: "" },
    league_id: { value: "", error: "" },
    stadium_name: { value: "", error: "" },
    city: { value: "", error: "" },
    country: { value: "", error: "" },
    inception: { value: "", error: "" },
    last_updated: { value: "", error: "" },
  };

  let history = useHistory();

  useEffect(() => {
    console.log("use Effect called");

    LeaguesAPIService.getAllLeagues().then(setLeagues).catch(setError);

  }, []);


  /*****************************************************************************/
  /* Add Club to Database, update state, return to list of clubs */
  /*****************************************************************************/
  const onSubmitForm = (state) => {
    const club = state;

    ClubsAPIService.postClub(club)
      .then((data) => {
        addClubs(data);
        history.push("/clubs");
      })
      .catch((error) => setError(error));
  };

  /*****************/
  /* Handle Cancel */
  /*****************/
  const handleClickCancel = () => {
    history.push("/clubs");
  };

  /************************/
  /* Validate Form Fields */
  /************************/

  const stateValidatorSchema = {
    club_name: {
      required: true,
      validator: {
        func: (value) => value.length >= 3 && value.length <= 40,
        error: "Club Name must be between 3 and 40 characters",
      },
    },
    stadium_name: {
      required: true,
      validator: {
        func: (value) => value.length >= 3 && value.length <= 40,
        error: "Stadium Name must be between 3 and 40 characters",
      },
    },
    league_id: {
      required: true,
      validator: {
        func: (value) => value.length = 2 && (Number(value)),
        error: "League ID must be numeric",
      },
    },
    height: {
      required: true,
      validator: {
        func: (value) => value.length > 0,
        error: "Height must be greater than 0",
      },
    },
    city: {
      required: true,
      validator: {
        func: (value) => value.length >= 3 && value.length <= 40,
        error: "City must be between 3 and 40 characters",
      },
    },
    country: {
      required: true,
      validator: {
        func: (value) => value.length >= 3 && value.length <= 40,
        error: "Country must be between 3 and 40 characters",
      },
    },
    inception: {
      required: true,
      validator: {
        func: (value) => value.length = 4 && (Number(value)),
        error: "Inception year must be 4 digit number",
      },
    },    
  };

  const {
    values,
    errors,
    dirty,
    handleOnChange,
    handleOnSubmit,
    disable,
  } = useForm(stateSchema, stateValidatorSchema, onSubmitForm);

  const {
    club_name,
    icon_url,
    league_id,
    stadium_name,
    city,
    country,
    inception,
  } = values;

  const leagueOptions = leagues.map((league, i) =>
  <option value={league.league_id} key={i}>
    {league.league_name}
  </option>
  );
  leagueOptions.sort();

  return (
    <>
      <h1>Add Club</h1>
      <form className="AddClub__form" onSubmit={handleOnSubmit}>
        <div className="required">* Required Fields</div>
        <ul className="flex-outer">
          <li>
            <label htmlFor="club_name">Club Name: <Required /></label>
            <input
              type="text"
              name="club_name"
              id="club_name"
              placeholder="Club Name"
              maxLength="40"
              value={club_name}
              onChange={handleOnChange}
              required
            />
          </li>
          <li>
            {errors.club_name && dirty.club_name && (
              <ValidateError message={errors.club_name} />
            )}
          </li>
          <li>
            <label htmlFor="icon_url">Icon URL:</label>
            <input
              type="text"
              name="icon_url"
              id="icon_url"
              placeholder="Icon URL"
              maxLength="40"
              value={icon_url}
              onChange={handleOnChange}
              required
            />
          </li>
          {/* <li>
            {errors.icon_url && dirty.icon_url && (
              <ValidateError message={errors.icon_url} />
            )}
          </li> */}
          <li>
              <label htmlFor="league_id">
                League ID:
                <Required />
              </label>   
              <select
                id='league_id'
                name='league_id'
                className='formSelect'
                aria-label="Select a league"
                aria-required="true"
                // value={values.club_id}
                onChange={handleOnChange}
              >
                <option value=''>League... </option>
                {leagueOptions}
              </select>
            </li>
            <li>
            {errors.league_id && dirty.league_id && (
              <ValidateError message={errors.league_id} />
            )}
          </li>
          <li>
            <label htmlFor="stadium_name">Stadium Name: <Required /></label>
            <input
              type="text"
              name="stadium_name"
              id="stadium_name"
              placeholder="Stadium Name"
              maxLength="40"
              value={stadium_name}
              onChange={handleOnChange}
              required
            />
          </li>
          <li>
            {errors.stadium_name && dirty.stadium_name && (
              <ValidateError message={errors.stadium_name} />
            )}
          </li>
          <li>
            <label htmlFor="city">City: <Required /></label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="City"
              maxLength="40"
              value={city}
              onChange={handleOnChange}
              required
            />
          </li>
          <li>
            {errors.city && dirty.city && (
              <ValidateError message={errors.city} />
            )}
          </li>
          <li>
            <label htmlFor="country">Country: <Required /></label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder="Country"
              maxLength="40"
              value={country}
              onChange={handleOnChange}
              required
            />
          </li>
          <li>
            {errors.country && dirty.country && (
              <ValidateError message={errors.country} />
            )}
          </li>
          <li>
            <label htmlFor="inception">Inception: <Required /></label>
            <input
              type="text"
              name="inception"
              id="inception"
              placeholder="Inception"
              maxLength="40"
              value={inception}
              onChange={handleOnChange}
              required
            />
          </li>
          <li>
            {errors.inception && dirty.inception && (
              <ValidateError message={errors.inception} />
            )}
          </li>
          <li className="form__button-group">
            <button type="button" onClick={() => handleClickCancel()}>
              Cancel
            </button>
            <button type="submit" disabled={disable}>
              Save
            </button>
          </li>
        </ul>  
      </form>
    </>
  );  
}