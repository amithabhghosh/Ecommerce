import axios from 'axios'
const API = axios.create({
    baseURL: "https://ecommercebackend-tau-five.vercel.app",
    withCredentials: true,  
});

export default API
