import axios from 'axios';

export const http = axios.create({
    baseURL: process.env['REACT_APP_BACKEND_BASE_URL']!, 
    headers: {
        'Content-Type': 'application/json'
    }
});
