import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useForm from "../Components/Hooks/useForm";
import PlayersClubsAPIService from "../Services/players-clubs-api-service";
import ClubsAPIService from "../Services/clubs-api-service";
import ValidateError from "../Components/ValidateError/ValidateError";
import { ClubContext } from "../Components/Context/ClubContext";

const Required = () => <span className="form__required">*</span>;

export default function UpdatePlayersClubs(props) {
  //const {player_id, club_id} = props.match.params;
  const { clubs, setClubs } = useContext(ClubContext);
  console.log("clubs", clubs);

  const [error, setError] = useState("");
  const [ playersClub, setPlayersClub ] = useState([]);

  //const setPlayersClub = (playersClub) => {

  // this.setState({
  //   playersClub: {
  //     player_id: {value: playersClub.player_id},
  //     club_id: {value: playersClub.club_id},
  //     jersey_number: {value: playersClub.jersey_number},
  //     signing_date: {value: playersClub.signing_date},
  //     end_date: {value: playersClub.end_date},
  //     last_updated: {value: playersClub.last_updated || ""},
  //   },
  // });

  //};

  /*****************************************************************************/
  /* Get Players current club in DB */
  /*****************************************************************************/
  useEffect(() => {
    console.log("players clubs use Effect called");

    PlayersClubsAPIService.getPlayersClub(
      props.match.params.player_id,
      props.match.params.club_id
    )
      .then((data) => setPlayersClub(data))
      .catch(setError);
  }, []);
  /*****************************************************************************/
  /* GetClubs for select box */
  /*****************************************************************************/
  useEffect(() => {
    console.log("club use Effect called");

    ClubsAPIService.getAllClubs().then(setClubs).catch(setError);

  }, []);
  // onSubmit update from state

  const stateSchema = {
    player_id: { value: "", error: "" },
    club_id: { value: "", error: "" },
    is_current_club: { value: "", error: "" },
    signing_date: { value: "", error: "" },
    end_date: { value: "", error: "" },
    jersey_number: { value:  "", error: "" },
    last_updated: { value: "", error: "" },
  };

  let history = useHistory();

  /*****************************************************************************/
  /* Update Player's Club in Database, return to player */
  /*****************************************************************************/
  const onSubmitForm = (state) => {
    const playersClub = state;
    console.log("outgoing Players data", playersClub)

    PlayersClubsAPIService.updatePlayersClub(playersClub)
      .then((data) => {
        //updatePlayersClub(data);
        history.push("/player");
      })
      .catch((error) => setError(error));
  };

  /*****************/
  /* Handle Cancel */
  /*****************/
  const handleClickCancel = () => {
    history.push("/player/${props.match.params.player_id}");
  };

  const stateValidatorSchema = {
    club_id: {
      required: true,
      validator: {
        func: (value) => value.length >= 0 && value.length <= 4,
        error: "Club ID must be between 1 and 3 characters",
      },
    },

    signing_date: {
      required: true,
      validator: {
        func: (value) => value.length >= 3 && value.length <= 40,
        error: "First Name must be between 3 and 40 characters",
      },
    },
    end_date: {
      required: false,
    },

    jersey_number: {
      required: true,
      validator: {
        func: (value) => value.length === 2,
        error: "Birth Country must be two character Country Code",
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

  const { players_id, club_id, signing_date, end_date, jersey_number } = values;

  values.player_id = playersClub.player_id;
  values.jersey_number =  playersClub.jersey_number;
  values.club_id = playersClub.club_id;
  values.signing_date = playersClub.signing_date;
  values.end_date = playersClub.end_date;
  
  console.log("values", values);
  console.log("playersClub", playersClub);

  const clubOptions = clubs.map((club, i) =>
  <option value={club.club_id} key={i}>
    {club.club_name}
  </option>
);
clubOptions.sort();

  return (
    <>
      <h1>Update Players Club</h1>
      <form className="Player__form" onSubmit={handleOnSubmit}>
        <div className="required">* Required Fields</div>
        <ul className="flex-outer">          
          <li>
              <label htmlFor="club_id">
                Current Club:
                <Required />
              </label>   
              <select
                id='club_id'
                name='club_id'
                className='formSelect'
                aria-label="Select a club"
                aria-required="true"
                // value={values.club_id}
                onChange={handleOnChange}
              >
                <option value=''>Club... </option>
                {clubOptions}
              </select>
            </li>
            <li>
            {errors.club_id && dirty.club_id && (
              <ValidateError message={errors.club_id} />
            )}
          </li>

          <li>
            <label htmlFor="signing_date">Signing Date: <Required /></label>
            <input
              type="text"
              name="signing_date"
              id="signing_date"
              placeholder="Signing Date"
              maxLength="40"
              value={signing_date}
              onChange={handleOnChange}
              required
            />
          </li>
          <li>
            {errors.signing_date && dirty.signing_date && (
              <ValidateError message={errors.signing_date} />
            )}
          </li>
          <li>
            <label htmlFor="end_date">End Date: </label>
            <input
              type="text"
              name="end_date"
              id="end_date"
              placeholder="End Date"
              maxLength="40"
              value={end_date}
              onChange={handleOnChange}
              required
            />
          </li>
          {/* <li>
            {errors.end_date && dirty.end_date && (
              <ValidateError message={errors.end_date} />
            )}
          </li> */}
          <li>
            <label htmlFor="jersey_number">Jersey Number: <Required /></label>
            <input
              type="text"
              name="jersey_number"
              id="jersey_number"
              placeholder="Jersey Number"
              maxLength="40"
              defaultValue={jersey_number}
              onChange={handleOnChange}
              required
            />
          </li>
          <li>
            {errors.jersey_number && dirty.jersey_number && (
              <ValidateError message={errors.jersey_number} />
            )}
          </li>
          <li className="form__button-group">
            <button type="submit" disabled={disable}>
              Save
            </button>
          </li>
        </ul>  
      </form>  
    </>
  );
}
