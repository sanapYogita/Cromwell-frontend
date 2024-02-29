import axiosInstance from "./axiosInstance";
//Register End point
export const registerUserService = async (data) => {
  return await axiosInstance.post(`/register`, data);
};

//Login End point
export const loginUserService = async (data) => {
  return await axiosInstance.post(`/login`, data);
};

// ////Login End point
// export const getUserDetails = async (data) => {
//   return await axiosInstance.post(`/getUserDetails`);
// };