import {useCallback, useEffect, useState} from 'react';
import axios from "axios";

import axiosWithCredentials from "../http/axiosWithCredentials";
const createTokenProvider = () => {

    let  observers = [];


    const localStorageKey = 'jwtToken'

    const getExpirationDate = (token) => {
        if (!token) {
            return null;
        }

        const jwt = JSON.parse(atob(token.split('.')[1]));
        return jwt.exp * 1000 || null;
    };


    const isExpired = (exp) => {
        if (!exp) {
            return false;
        }

        return Date.now() > exp;
    };

    const getToken = async () => {

        const token = localStorage.getItem('jwtToken')

        if (isExpired(getExpirationDate(token))) {
            const updatedToken = await axiosWithCredentials.post('/refresh-token')
            setToken(updatedToken.data[localStorageKey]);
        }

        return localStorage.getItem('jwtToken')
    };

    const isLoggedIn = () => {
        return !!localStorage.getItem('jwtToken');
    };

    const setToken = (token) => {

        if (token) {
            localStorage.setItem(localStorageKey, token);
        } else {
            localStorage.removeItem(localStorageKey);
        }

        notify();
    };

    const notify = () => {
        const isLogged = isLoggedIn();
        observers.forEach(observer => observer(isLogged));
    };

    const subscribe = (observer) => {
        observers.push(observer);
    };

    const unsubscribe = (observer) => {
        observers = observers.filter(_observer => _observer !== observer);
    };

    return {
        getToken,
        isLoggedIn,
        setToken,
        subscribe,
        unsubscribe,
    };
}


export const createAuthProvider = () => {



    const tokenProvider = createTokenProvider()

    let axiosWithToken = axios.create({
        baseURL: 'http://localhost:3000'
    })

    axiosWithToken.interceptors.request.use(async req => {

        req.headers.Authorization = `Bearer ${await tokenProvider.getToken()}`;

        return req;
    })

    const login = (newTokens) => {
        tokenProvider.setToken(newTokens);
    };

    const logout = async () => {
        await axiosWithCredentials.post('/logout')
        tokenProvider.setToken(null);
    };

    // const authFetch = async (input, init) => {
    //
    //     const token = await tokenProvider.getToken();
    //
    //     init = init || {};
    //
    //     init.headers = {
    //         ...init.headers,
    //         Authorization: `Bearer ${token}`,
    //     };
    //
    //     return fetch(input, init);
    // };

    const useAuth = () => {

        const [isLogged, setIsLogged] = useState(tokenProvider.isLoggedIn());

        const listener = useCallback(
            (newIsLogged) => {
                setIsLogged(newIsLogged);
            },
            [setIsLogged],
        );

        useEffect(() => {

            tokenProvider.subscribe(listener);

            return () => {
                tokenProvider.unsubscribe(listener);
            };

        }, [listener]);

        return isLogged;
    };

    return {useAuth, axiosWithToken, login, logout}
};

const {useAuth, axiosWithToken, login, logout} = createAuthProvider();

export {useAuth};
export {login};
export {axiosWithToken};
export {logout};
