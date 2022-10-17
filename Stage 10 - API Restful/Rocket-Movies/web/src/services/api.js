const axios = require("axios");

export const api = axios.create({
  baseURL: "http://localhost:3333"
});

