import axios from "axios";

const axiosWithCredentials = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000'
})

export default axiosWithCredentials