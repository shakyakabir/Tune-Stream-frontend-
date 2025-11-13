import axiosInstance from "../ApiInstacne/axiosInstance";
import { type AuthRequest, type AuthResponse } from "../Type/Auth";

export const AuthLogin=async(authRequest: AuthRequest): Promise<AuthResponse> =>{
    const response=await axiosInstance.post<AuthResponse,AuthResponse>(`api/login`,authRequest);
    
     
  console.log("Login Response:", response);
   if (response.token) {
    localStorage.setItem("token", response.token);
  }

  return response;

}


export const AuthRegister=async(authRequest:AuthRequest): Promise<AuthResponse> =>{
    const response=await axiosInstance.post<AuthResponse>(`api/register`,authRequest);
    console.log("Register Response:", response);
    const responseData=response.data
       if (responseData.token) {
      localStorage.setItem("token", responseData.token);
    }
    
    return responseData;
    

}