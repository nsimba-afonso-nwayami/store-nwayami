import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.nwayami.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});
