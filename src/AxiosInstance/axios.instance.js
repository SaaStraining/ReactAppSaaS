import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3001/api",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    }
});