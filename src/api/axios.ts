import axios from 'axios';

export const http = axios.create({
    baseURL: import.meta.env['VITE_BACKEND_BASE_URL'], 
    headers: {
        'Content-Type': 'application/json'
    }
});
