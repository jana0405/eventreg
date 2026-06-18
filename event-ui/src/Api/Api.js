import axios from 'axios';

const api = axios.create({
    baseURL: 'https://eventreg-syhx.vercel.app/', 
});

export default api;