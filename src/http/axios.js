import ax from "axios";

export const axios = ax.create({
    baseURL: process.env.REACT_APP_API_ADDRESS
})

export const axiosWithCredentials = ax.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_ADDRESS
})