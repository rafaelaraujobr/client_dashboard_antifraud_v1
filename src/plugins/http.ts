import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
} from "axios";

import router from "../router";
import { refreshTokenService } from "../services/accountServices";

const http: AxiosInstance = axios.create({
  baseURL: process.env.API_URL || "http://localhost:3000/api/v1/",
});

http.interceptors.request.use(
  (config: any) => {
    const token: string | null = localStorage.getItem("token");
    const refreshToken: string | null = localStorage.getItem("refreshToken");
    const isAuthPath: boolean = config.url.includes("auth/login") || false;
    const isRefreshPath: boolean =
      config.url.includes("auth/refresh-token") || false;
    if (token && !isAuthPath && !isRefreshPath)
      config.headers.Authorization = `Bearer ${token}`;
    else if (refreshToken && !isAuthPath && isRefreshPath)
      config.headers.Authorization = `Bearer ${refreshToken}`;
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);
http.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalConfig: any = error.config;
    if (originalConfig?.url !== "/auth/signin" && error.response) {
      if (error.response?.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const { data, status } = await refreshTokenService();
          if (status === 200 || status === 201) {
            localStorage.setItem("token", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);
            return http(originalConfig);
          }
        } catch (erro) {
          localStorage.removeItem("token");
          localStorage.removeItem("refreshToken");
          router.push("/signin");
          return Promise.reject(erro);
        }
      }
    }
  }
);
export default http;
