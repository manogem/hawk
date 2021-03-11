import axios from 'axios';

export const AuthApi = axios.create({
    baseURL: process.env.REACT_APP_USER_AUTHENTICATION_BASE_URL,
});

export const AppApi = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});
