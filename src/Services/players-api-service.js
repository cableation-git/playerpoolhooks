import config from "../config";
import TokenService from "./token-service";

const PlayersApiService = {
  getAllPlayers() {
    return fetch(config.API_ENDPOINT_PLAYERS, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getPlayerInfo() {
    const url = `${config.API_ENDPOINT_PLAYERS}/playerInfo`;
    console.log('GET PLAYER INFO  url', url)
      return fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getPlayer(player_id) {
    const url = `${config.API_ENDPOINT_PLAYERS}/${player_id}`;
    console.log('url', url)
      return fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postPlayer(player) {
    return fetch(config.API_ENDPOINT_PLAYERS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(player),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default PlayersApiService;
