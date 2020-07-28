import config from "../config";
import TokenService from "./token-service";

const PlayersClubsApiService = {
  getAllPlayersClubs() {
    return fetch(config.API_ENDPOINT_PLAYERS_CLUBS, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getPlayersClub(player_id,club_id) {
    const url = `${config.API_ENDPOINT_PLAYERS_CLUBS}/${player_id}/${club_id}`;
    console.log('url', url)
      return fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  updatePlayersClub(playersClub) {
    console.log("got into endpoint call")
    return fetch(config.API_ENDPOINT_PLAYERS_CLUBS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(playersClub),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default PlayersClubsApiService;