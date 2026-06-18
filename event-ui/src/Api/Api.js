import axios from 'axios';

// 1. Grab the live URL from Vercel's environment variables
const API_URL = import.meta.env.VITE_URL;

// 2. Create a reusable Axios instance
const api = axios.create({
    baseURL: API_URL
});

// 3. Export it so your form components can use it
export default api;