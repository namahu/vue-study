import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL
});

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
