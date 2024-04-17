import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

// add intercepters: special functions executed before the request is sent or after the response is received
// before making request
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('ACCESS_TOKEN')
  config.headers.Authorization = `Bearer ${token}`
  return config;
})

// create response interceptors
axiosClient.interceptors.response.use((response) => {
  return response;
}, (error) => {
  const {response} = error;
  // if user is unauthorized or token is not exist
  if (response.status === 401){
    localStorage.removeItem('ACCESS_TOKEN')
  }

  throw error;
})
export default axiosClient;
