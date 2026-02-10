import axiosInstance from "../../ApiInstacne/axiosInstance";
import type { Artist } from "../../Type/Artisit/Music";
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const GetAllArtist = async (): Promise<Artist[]> => {
  const response = await axiosInstance.get<Artist[]>("api/artists");

  console.log(response, "rs");

  return response.data;
};

export const GetArtistId = async (id: number): Promise<Artist[]> => {
  const response = await axiosInstance.get<Artist[]>(`api/artists/${id}`);

  console.log(response, "rs");

  return response.data;
};
