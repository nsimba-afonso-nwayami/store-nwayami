import axios from "axios";

export const api = axios.create({
  //baseURL: "https://api.nwayami.com/api/",
  baseURL: "/api/",
  headers: {
    "Content-Type": "application/json",
  },
});
