export default (state, action) => {
  switch (action.type) {
    case "SET_PLAYERS":
      return action.payload;

    case "ADD_PLAYERS":
      const newPlayer = action.payload;

      return state.map((player) =>
        player.player_id !== newPlayer.player_id ? player : newPlayer
      );

    case "UPDATE_PLAYERS":
      const updatedPlayer = action.payload;

      return state.map((player) =>
        player.player_id !== updatedPlayer.player_id ? player : updatedPlayer
      );

    default:
      return state;
  }
};
