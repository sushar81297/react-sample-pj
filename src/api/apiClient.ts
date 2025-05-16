import axios, { AxiosError } from "axios";
import { user } from "@/atoms/agencyBanking";
import { getRecoil } from "recoil-nexus";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: "https://smart-home-production-79e1.up.railway.app",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token dynamically before each request
apiClient.interceptors.request.use((config) => {
  try {
    const { token } = getRecoil(user);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    console.warn("getRecoil failed. Is RecoilNexus initialized yet?", error);
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
