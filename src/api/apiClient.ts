import axios, { AxiosError } from "axios";
import { user } from "../atoms/agencyBanking";
import { getRecoil } from "recoil-nexus";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token dynamically before each request
apiClient.interceptors.request.use((config) => {
  const token = getRecoil(user).name;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add a response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      console.error("Error status:", error.response.status);
      console.error("Error data:", error.response.data);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
