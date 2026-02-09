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
import type { categories } from "./Type";

export type MusicFormData = FormData; // FormData is fine for file uploads

export const Category = async (
  data: categories,
): Promise<{ message: string }> => {
  const response = await axiosInstance.post<{ message: string }>(
    `api/categories`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return response.data;
};

export const GetCategories = async (): Promise<categories> => {
  const response = await axiosInstance.get<categories>("api/categories/all");

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
