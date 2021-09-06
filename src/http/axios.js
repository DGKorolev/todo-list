import apiAxios from "axios";
import Cookies from 'js-cookie'

apiAxios.defaults.baseURL = process.env.REACT_APP_API_ADDRESS

apiAxios.interceptors.request.use(req => {

    const token = Cookies.get('jwtToken')

    if (token){
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

export default apiAxios