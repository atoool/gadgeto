import axios from "axios";

export const baseURL = "http://localhost:3001";
export const version = "V1.0.0";

const api = axios.create({
  baseURL: `${baseURL}/api`,
  responseType: "json",
});

export function setAuthorizationHeader() {
  const token = sessionStorage.getItem("1jnasjn3jn") ?? "";
  api.defaults.headers.common["x-access-token"] = `${token}`;
}

export default api;
