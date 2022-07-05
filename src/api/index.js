import axios from "axios";

export const baseURL = "http://localhost:3001";
export const version = "V1.0.0";

const api = axios.create({
  baseURL: `${baseURL}/api`,
  responseType: "json",
});

export function setAuthorizationHeader(token) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export default api;
