import axios from 'axios';
import Cookies from 'js-cookie';


const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  'COOKIES': {
    jwt: Cookies.get("jwt")
  },
  headers: {
    'Content-Type': 'application/json',
    "token": Cookies.get("jwt"),
    'COOKIES': {
      jwt: Cookies.get("jwt")
    }
  },
});


export default axiosInstance;