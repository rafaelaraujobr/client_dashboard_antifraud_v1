import type { AxiosInstance } from "axios";
import http from "../plugins/http";

export const loginService = async (
  email: string,
  password: string
): Promise<any> => {
  return await http.post<AxiosInstance>("auth/login", {
    email,
    password,
  });
};

export const getProfileService = async (): Promise<any> => {
  return await http.get<AxiosInstance>("profile");
};

export const refreshTokenService = async (): Promise<any> => {
  return await http.patch<AxiosInstance>("auth/refresh-token");
};
