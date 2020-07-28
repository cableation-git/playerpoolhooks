import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useForm from "../Components/Hooks/useForm";
import { PlayerContext } from "../Components/Context/PlayerContext";
import ValidateError from "../Components/ValidateError/ValidateError";
import PlayersAPIService from "../Services/players-api-service";
import "../Components/Players/AddPlayer.css";
import "../Components/Shared/Shared.css";

const Required = () => <span className="form__required">*</span>;

export default function PlayerAddPage() {
  const { addPlayers, setError } = useContext(PlayerContext);

  const stateSchema = {
    first_name: { value: "", error: "" },
    last_name: { value: "", error: "" },
    birth_date: { value: "", error: "" },
    height: { value: "", error: "" },
    birth_city: { value: "", error: "" },
    birth_state: { value: "", error: "" },
    birth_country: { value: "", error: "" },
    image_url: { value: "", error: "" },
  };

  let history = useHistory();

  /*****************************************************************************/
  /* Add Player to Database, update state, return to list of players */
  /*****************************************************************************/
  const onSubmitForm = (state) => {
    const player = state;

    PlayersAPIService.postPlayer(player)
      .then((data) => {
        addPlayers(data);
        history.push("/players");
      })
      .catch((error) => setError(error));
  };

  /*****************/
  /* Handle Cancel */
  /*****************/
  const handleClickCancel = () => {
    history.push("/players");
  };

  /************************/
  /* Validate Form Fields */
  /************************/

  const stateValidatorSchema = {
    first_name: {
      required: true,
      validator: {
        func: (value) => value.length >= 3 && value.length <= 40,
        error: "First Name must be between 3 and 40 characters",
      },
    },
    last_name: {
      required: true,
      validator: {
        func: (value) => value.length >= 3 && value.length <= 40,
        error: "Last Name must be between 3 and 40 characters",
      },
    },
    birth_date: {
      required: true,
      validator: {
        func: (value) => value.length >= 3 && value.length <= 40,
        error: "Birth Date must be in the format mm-dd-yyyy",
      },
    },
    height: {
      required: true,
      validator: {
        func: (value) => value.length > 0,
        error: "Height must be greater than 0",
      },
    },
    birth_city: {
      required: true,
      validator: {
        func: (value) => value.length >= 3 && value.length <= 40,
        error: "Birth City must be between 3 and 40 characters",
      },
    },
    birth_state: {
      required: false,
    },
    birth_country: {
      required: true,
      validator: {
        func: (value) => value.length === 2,
        error: "Birth Country must be two character Country Code",
      },
    },
    image_url: {
      required: false,
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
    first_name,
    last_name,
    birth_date,
    height,
    birth_city,
    birth_state,
    birth_country,
    image_url,
  } = values;

  return (
    <>
      <h1>Add Player</h1>
      <form className="Player__form" onSubmit={handleOnSubmit}>
        <div className="required">* Required Fields</div>
        <ul className="flex-outer">
          <li>
            <label htmlFor="first_name">First Name: <Required /></label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="First Name"
              maxLength="40"
              value={first_name}
              onChange={handleOnChange}
              required
            />
          </li>
          <li>
            {errors.first_name && dirty.first_name && (
              <ValidateError message={errors.first_name} />
            )}
          </li>

          <li>
            <label htmlFor="last_name">Last Name:<Required /></label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Last Name"
              maxLength="40"
              value={last_name}
              onChange={handleOnChange}
              required
            />
          </li>
          <li>
            {errors.last_name && dirty.last_name && (
              <ValidateError message={errors.last_name} />
            )}
          </li>
          <li>
            <label htmlFor="birth_date">Birth Date:<Required /></label>
            <input
              type="text"
              name="birth_date"
              id="birth_date"
              placeholder="Birth Date"
              maxLength="40"
              value={birth_date}
              onChange={handleOnChange}
              required
            />
          </li>
          <li>
            {errors.birth_date && dirty.birth_date && (
              <ValidateError message={errors.birth_date} />
            )}
          </li>
          <li>
            <label htmlFor="height">Height:<Required /></label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Height"
              maxLength="40"
              value={height}
              onChange={handleOnChange}
              required
            />
          </li>
          <li>
            {errors.height && dirty.height && (
              <ValidateError message={errors.height} />
            )}
          </li>
          <li>
            <label htmlFor="birth_city">Birth City:<Required /></label>
            <input
              type="text"
              name="birth_city"
              id="birth_city"
              placeholder="Birth City"
              maxLength="40"
              value={birth_city}
              onChange={handleOnChange}
              required
            />
          </li>
          <li>
            {errors.birth_city && dirty.birth_city && (
              <ValidateError message={errors.birth_city} />
            )}
          </li>
          <li>
            <label htmlFor="birth_state">Birth State:</label>
            <input
              type="text"
              name="birth_state"
              id="birth_state"
              placeholder="Birth State"
              maxLength="40"
              value={birth_state}
              onChange={handleOnChange}
              required
            />
          </li>
          {/* <li>
            {errors.birth_state && dirty.birth_state && (
              <ValidateError message={errors.birth_state} />
            )}
          </li> */}
          <li>
            <label htmlFor="birth_country">Birth Country Code:<Required /></label>
            <input
              type="text"
              name="birth_country"
              id="birth_country"
              placeholder="Country Code"
              maxLength="40"
              value={birth_country}
              onChange={handleOnChange}
              required
            />
          </li>
          <li>
            {errors.birth_country && dirty.birth_country && (
              <ValidateError message={errors.birth_country} />
            )}
          </li>
          <li>
            <label htmlFor="image_url">Image URL:</label>
            <input
              type="text"
              name="image_url"
              id="image_url"
              placeholder="image_url"
              maxLength="40"
              value={image_url}
              onChange={handleOnChange}
              required
            />
          </li>
          {/* <li>
            {errors.image_url && dirty.image_url && (
              <ValidateError message={errors.image_url} />
            )}
          </li> */}

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
