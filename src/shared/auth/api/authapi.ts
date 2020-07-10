import axios, { AxiosResponse } from 'axios';
import mockAdapter from 'axios-mock-adapter';
import * as dataTypes from '../types';
// TODO put this in config
axios.defaults.baseURL = 'http://127.0.0.1:8000';

// userdetail: dataTypes.LoginDetails
export function login() {
    const userdetail: dataTypes.LoginDetails = {
        username: 'jeeva',
        password: 'pwd',
    };

    return axios.post('login/', {
        username: 'dragan',
        password: 'dragan',
        email: 'fjsdijf@gmail.com',
        first_name: 'gane',
        last_name: 'gandra',
    });
}

export function register(action: any) {
    const userdetails = action.payload.data;

    return axios.post('register/', {
        username: userdetails.username,
        password: userdetails.password,
        email: userdetails.email,
        first_name: userdetails.first_name,
        last_name: userdetails.last_name,
    });
}

export function logout() {
    return axios.post('/logout');
}
