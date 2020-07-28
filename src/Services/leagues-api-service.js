import config from "../config";

const LeaguesApiService = {
  getAllLeagues() {
    return fetch(config.API_ENDPOINT_LEAGUES, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  
};

export default LeaguesApiService;