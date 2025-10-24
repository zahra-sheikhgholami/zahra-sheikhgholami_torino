import axios from "axios";
import { getCookie, removeCookie, setCookie } from "@/src/core/utils/cookie";
import { getNewToken } from "@/src/core/services/token";
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const orginalRequest = error.config;

    if (error.response.status === 403 && !orginalRequest._retry) {
      orginalRequest._retry = true;
      const res = await getNewToken();

      setCookie("accessToken", res?.accessToken, 1);

      return api(orginalRequest);
    } 
    
    return Promise.reject(error);
  }
);

export default api;
