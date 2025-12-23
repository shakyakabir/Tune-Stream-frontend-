import axiosInstance from "../../ApiInstacne/axiosInstance";
import type { MusicData } from "../../Type/Artisit/Music";

export const UploadMusic = async (
  UploadMusic: MusicData
): Promise<MusicData> => {
  const response = await axiosInstance.post<MusicData, MusicData>(
    `api/music`,
    UploadMusic,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response;
};
