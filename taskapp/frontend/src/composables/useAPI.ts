import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL || "http://localhost:3000",
  withCredentials: true
});

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
