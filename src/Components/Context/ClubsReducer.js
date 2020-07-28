export default (state, action) => {
  switch (action.type) {
    case "SET_CLUBS":
      return action.payload;

    case "UPDATE_CLUBS":
      const updatedClub = action.payload;

      return state.map((club) =>
        club.club_id !== updatedClub.club_id ? club : updatedClub
      );

    default:
      return state;
  }
};