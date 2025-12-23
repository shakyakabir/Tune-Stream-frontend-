import axiosInstance from "../ApiInstacne/axiosInstance";
import { type MerchData } from "../Type/Merch";

export const MerchServices = async (): Promise<MerchData[]> => {
  const response = await axiosInstance.get<_, MerchData[]>(`/api/merch`);

  return response;
};
