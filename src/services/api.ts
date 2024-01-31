import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { StatusCodes } from "http-status-codes";
import { toast } from "react-toastify";
import { BACKEND_URL, REQUEST_TIMEOUT } from "../const";

type DetailMessageType = {
  type: string;
  message: string;
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const createAPI = (apiKey: string): AxiosInstance => {
    const api = axios.create({
      baseURL: BACKEND_URL,
      timeout: REQUEST_TIMEOUT,
      headers: {
        'x-api-key': apiKey,
      },
    });
  
    api.interceptors.request.use(
      (config) => {
        return config;
      },
    );
  
    api.interceptors.response.use(
      (response) => response,
      (error: AxiosError<DetailMessageType>) => {
        if (error.response && shouldDisplayError(error.response)) {
          const detailMessage = (error.response.data);
  
          toast.warn(detailMessage.message);
        }
  
        throw error;
      }
    );
  
    return api;
  };