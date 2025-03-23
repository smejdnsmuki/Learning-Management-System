import axios from "axios";
import { getRefreshedToken, isAccessTokenExpired, setAuthUser } from "./auth";
import { API_BASE_URL } from "./constants";
import Cookies from "js-cookie";

// Axios interceptors are functions that allow you to run custom logic before a request is 
// sent (request interceptor) or after a response is received (response interceptor). 
// They are useful for handling authentication, logging, request modification, error handling, etc.

// The .use() method in Axios interceptors accepts two arguments:
// A function to modify requests or responses
// An error handler function (optional)

const useAxios = () => {
    const accessToken = Cookies.get("access_token");
    const refreshToken = Cookies.get("refresh_token");

    const axiosInstance = axios.create({
        baseURL: API_BASE_URL,
        headers: { Authorization: `Bearer ${accessToken}` },
    });

    axiosInstance.interceptors.request.use(
        async(req) => {
            if (!isAccessTokenExpired(accessToken)) {
                return req
            }

            const response = await getRefreshedToken()
            setAuthUser(response.access, response.refresh)
            req.headers.Authorization = `Bearer ${response.data?.access}`;
            return req;
        }
    )
    return axiosInstance
}

export default useAxios;
