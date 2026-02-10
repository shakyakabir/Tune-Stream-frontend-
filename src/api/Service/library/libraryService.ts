import axiosInstance from "../../ApiInstacne/axiosInstance";

export const createLibrary = async (data: {
  name: string;
  description: string;
}) => {
  const response = await axiosInstance.post("/api/playlists", data);
  return response.data;
};

export const GetLibrary = async () => {
  try {
    const response = await axiosInstance.get("/api/playlists");
    console.log(response, "sds");
    return response;
  } catch (error) {
    console.error("Error fetching playlists:", error);
    throw error;
  }
};
export const GetLibraryId = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/api/playlists/${id}`);
    console.log(response, "sds");
    return response;
  } catch (error) {
    console.error("Error fetching playlists:", error);
    throw error;
  }
};
