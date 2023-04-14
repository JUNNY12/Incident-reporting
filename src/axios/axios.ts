import axios from "axios";

type baseURL = "https://incident-reporting-383016-default-rtdb.firebaseio.com/";
const baseURL: baseURL = "https://incident-reporting-383016-default-rtdb.firebaseio.com/";

const axiosInstance = axios.create({
    baseURL: baseURL,
});

export default axiosInstance;