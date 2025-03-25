import axios, { AxiosResponse, InternalAxiosRequestConfig, AxiosHeaders } from "axios";
import queryString from "query-string";

const axiosClientV2 = axios.create({
  baseURL:   `${process.env.NEXT_PUBLIC_SERVER_URL_V2}`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClientV2.interceptors.request.use(
  async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      config.headers.set("Authorization", `Bearer ${accessToken}`);
    }

    return config; 
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor
axiosClientV2.interceptors.response.use(
  (response: AxiosResponse): any => {
    return response.data; 
  },
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosClientV2;
