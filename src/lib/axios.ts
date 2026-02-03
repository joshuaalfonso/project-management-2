import axios from "axios";

// withCredentials: true, 
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, 
  headers: {
    "Content-Type": "application/json",
  },
});


export const getErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    console.log(error.response?.data);
    return error.response?.data?.message || 'Something went wrong';
  } else {
    console.log(error);
    return 'Something went wrong';
  }
}