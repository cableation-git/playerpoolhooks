export default (state, action) => {
  switch (action.type) {
    case "SET_LEAGUES":
      return action.payload;

    case "UPDATE_LEAGUES":
      const updatedleague = action.payload;

      return state.map((league) =>
        league.league_id !== updatedleague.league_id ? league : updatedleague
      );

    default:
      return state;
  }
};