import axios from 'axios';

// Create an axios instance
const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 10000,
    });

// Export the axios instance
export default api;