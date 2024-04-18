import axios from "axios";

const API_URL = await import.meta.env.VITE_APP_API_URL

const axiosInstance = axios.create({
    baseURL: API_URL
})

export function get(url: string, config = {}) {
    return axiosInstance.get(url, { ...config });
}
  
  export function post(url: string, data: object, config = {}) {
    return axiosInstance.post(url, data, { ...config });
  }
  
  export function put(url: string, data: object, config = {}) {
    return axiosInstance.put(url, data, { ...config });
  }
  
  export function patch(url: string, data: object, config = {}) {
    return axiosInstance.patch(url, data, { ...config });
  }
  
  export function del(url: string, config = {}) {
    return axiosInstance.delete(url, { ...config });
  }