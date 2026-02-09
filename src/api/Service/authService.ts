import axiosInstance from "../ApiInstacne/axiosInstance";
import { type AuthRequest, type AuthResponse } from "../Type/Auth";

export const AuthLogin = async (
  authRequest: AuthRequest,
): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse, AuthResponse>(
    `api/login`,
    authRequest,
  );

  console.log("Login Response:", response);
  if (response.token) {
    localStorage.setItem("token", response.token);
  }
  if (response.role) {
    localStorage.setItem("role", response.role);
  }

  return response;
};

export const AuthRegister = async (
  authRequest: AuthRequest,
): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse, AuthResponse>(
    `api/register`,
    authRequest,
  );
  console.log("Register Response:", response);

  if (response.token) {
    localStorage.setItem("token", response.token);
  }

  return response;
};

export const registerArtist = async (formData: FormData) => {
  const response = await axiosInstance.post<AuthResponse, AuthResponse>(
    "/api/ArtistRegister",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  if (response.token) {
    localStorage.setItem("token", response.token);
  }
  return response;
};

export const ArtistAuthLogin = async (
  authRequest: AuthRequest,
): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse, AuthResponse>(
    `api/artist/login`,
    authRequest,
  );

  console.log("Login Response:", response);
  if (response.token) {
    localStorage.setItem("token", response.token);
  }
  if (response.role) {
    localStorage.setItem("role", response.role);
  }

  return response;
};
