import axios from "axios";
import store from "../store/store";
const axiosInstance = axios.create({ baseURL: `http://localhost:3001/user` });

axiosInstance.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.user.idToken;
  config.params = config.params || {};
  config.params["auth"] = token;
  return config;
});
export default axiosInstance;
