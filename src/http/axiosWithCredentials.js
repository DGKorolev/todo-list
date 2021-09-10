import axios from "axios";

const axiosWithCredentials = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_ADDRESS
})

export default axiosWithCredentials