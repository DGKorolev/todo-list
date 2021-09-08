import {useCallback, useEffect, useState} from 'react';
import axiosWithCredentials from '../http/axios'


const createTokenProvider = () => {

    let _token = localStorage.getItem('REACT_TOKEN_AUTH') || ''

    let  observers = [];

    const localStorageKey = 'jwtToken'

    const getExpirationDate = (token) => {
        if (!token) {
            return null;
        }

        const jwt = JSON.parse(atob(token.split('.')[1]));
        return jwt && jwt.exp && jwt.exp * 1000 || null;
    };


    const isExpired = (exp) => {
        if (!exp) {
            return false;
        }

        return Date.now() > exp;
    };

    const getToken = async () => {

        if (isExpired(getExpirationDate(_token))) {
            const updatedToken = await axiosWithCredentials.post('/refresh-token')
            setToken(updatedToken);
        }

        return _token;
    };

    const isLoggedIn = () => {
        return !!_token;
    };

    const setToken = (token) => {
        if (token) {
            localStorage.setItem(localStorageKey, JSON.stringify(token));
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

    const login = (newTokens) => {
        tokenProvider.setToken(newTokens);
    };

    const logout = () => {
        tokenProvider.setToken(null);
    };

    const authFetch = async (input, init) => {

        const token = await tokenProvider.getToken();

        init = init || {};

        init.headers = {
            ...init.headers,
            Authorization: `Bearer ${token}`,
        };

        return fetch(input, init);
    };

    const useAuth = () => {
        const [isLogged, setIsLogged] = useState(tokenProvider.isLoggedIn());

        useEffect(() => {

            const listener = useCallback((newIsLogged) => {
                setIsLogged(newIsLogged);
            }, []);

            tokenProvider.subscribe(listener);
            return () => {
                tokenProvider.unsubscribe(listener);
            };
        }, []);

        return isLogged;
    };

        return {useAuth, authFetch, login, logout}

};

export const {useAuth, authFetch, login, logout} = createAuthProvider();
