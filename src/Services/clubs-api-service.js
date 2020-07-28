import config from "../config";

const ClubsApiService = {
  getAllClubs() {
    return fetch(config.API_ENDPOINT_CLUBS, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  }
};

export default ClubsApiService;
