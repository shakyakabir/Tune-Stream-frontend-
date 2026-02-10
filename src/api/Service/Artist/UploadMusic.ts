// import axiosInstance from "../../ApiInstacne/axiosInstance";
// import type { MusicData } from "../../Type/Artisit/Music";

// export const UploadMusic = async (
//   UploadMusic: MusicData,
// ): Promise<MusicData> => {
//   const response = await axiosInstance.post<MusicData, MusicData>(
//     `api/music/upload`,
//     UploadMusic,
//     {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     },
//   );
//   return response;
// };

import axiosInstance from "../../ApiInstacne/axiosInstance";
import type { MusicData } from "../../Type/Artisit/Music";

export type MusicFormData = FormData; // FormData is fine for file uploads

export const UploadMusic = async (
  data: MusicFormData,
): Promise<{ message: string }> => {
  const response = await axiosInstance.post<{ message: string }>(
    `api/music/upload`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return response.data;
};

export type MusicResponse = {
  success: boolean;
  message: string;
  data: MusicData[];
};

export const AllMusic = async (): Promise<MusicResponse> => {
  const response = await axiosInstance.get<MusicResponse>("api/music/all");

  return response.data;
};
export const ArtistSong = async (): Promise<MusicResponse> => {
  const response = await axiosInstance.get<MusicResponse>("api/music/my-songs");

  return response.data;
};

export const AllArtist = async (): Promise<MusicResponse> => {
  const response = await axiosInstance.get<MusicResponse>("api/artists");

  return response.data;
};

export const DeleteMusic = async (
  id: number,
): Promise<{ success: boolean; message: string }> => {
  const response = await axiosInstance.delete(`api/music/${id}`);

  return response.data;
};

export const UpdateMusic = async (
  id: number,
  data: FormData,
): Promise<{ success: boolean; message: string; data: MusicData }> => {
  const response = await axiosInstance.put(`api/music/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const getAllMusic = async () => {
  const res = await axiosInstance.get("api/music/all");
  console.log(res, "tesign");
  return res.data;
};
