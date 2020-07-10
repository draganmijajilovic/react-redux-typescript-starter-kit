import axios, { AxiosResponse } from 'axios';
import mockAdapter from 'axios-mock-adapter';
import * as dataTypes from '../types';
// TODO put this in config
axios.defaults.baseURL = 'http://127.0.0.1:8000';
let token = '';

// userdetail: dataTypes.LoginDetails
export async function login(action: any) {
    const userdetails = action?.payload?.data;
    const response = await getAuthToken(userdetails.username, userdetails.password);
    token = response?.data?.token;
    console.log(token);
    return response;
}

function getAuthToken(username: string, password: string) {
    return axios.post('/api-token-auth/', {
        username: username,
        password: password,
    });
}
export function getHotels() {
    return axios.get('/hotel_api', { headers: { Authorization: `Token ${token}` } });
}
export function getHotelDetails(data: any) {
    return axios.get(`/hotel_api${data.id}`, { headers: { Authorization: `Token ${token}` } });
}

export async function register(action: any) {
    const userdetails = action?.payload?.data;

    const response = await axios.post('register/', {
        username: userdetails.username,
        password: userdetails.password,
        email: userdetails.email,
        first_name: userdetails.first_name,
        last_name: userdetails.last_name,
    });
    if (response.status === 201) {
        const getTokenResponse = await getAuthToken(userdetails.username, userdetails.password);
        token = getTokenResponse?.data?.token;
        return getTokenResponse;
    }
    return response;
}

export function logout() {
    return axios.post('/logout');
}
