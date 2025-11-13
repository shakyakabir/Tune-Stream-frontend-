/// <reference types="vite/client" />

import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;
if (!baseURL) {
  throw new Error("VITE_API_BASE_URL is not defined in .env (ensure .env is at project root and dev server restarted)");
}
console.log(baseURL, "hello");

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  


});


axiosInstance.interceptors.request.use((config)=>{
  const token=localStorage.getItem("token");
  if(token){
    config.headers.Authorization=`Bearer ${token}`;

}return config 
 },(error)=>{
    return Promise.reject (error);
  
})

axiosInstance.interceptors.response.use((response)=>  response.data,
(error) => {
    if (error.response?.status === 401) {
      console.log("Unauthorized! Redirect to login.");
      // optionally redirect user to login page
    }
     if (error.response?.status === 403) {
      console.log("Forbidden! Redirect to login.");
      // optionally redirect user to login page
    }
     if (error.response?.status === 404) {
      console.log("Not Found! Redirect to login.");
      // optionally redirect user to login page
    }
    return Promise.reject(error);
  


 
}); 
export default axiosInstance;

