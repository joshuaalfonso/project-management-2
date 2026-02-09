import axios from "axios";

// withCredentials: true, 
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, 
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       localStorage.removeItem("access_token");
//       window.location.href = "/login";
//     }

//     return Promise.reject(error);
//   }
// );


export const getErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    console.log(error.response?.data);
    return error.response?.data?.message || 'Something went wrong';
  } else {
    console.log(error);
    return 'Something went wrong';
  }
}