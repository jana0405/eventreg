import axios from 'axios';

// Bypass the environment variable and hardcode your exact live backend
const api = axios.create({
    baseURL: 'https://eventreg-syhx.vercel.app/api'
});

export default api;