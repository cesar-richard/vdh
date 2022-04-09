const axios = require("axios");
const { API_URL } = require("../constants/URL.contants");

export function request(type, data) {
  switch (type) {
    case "login":
      try {
        const res = axios.get(API_URL + "oauth/authorize", data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
      break;
    default:
      return "no route for the moment";
  }

  return;
}
