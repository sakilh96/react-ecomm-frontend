import axios from "axios";

const instanceAxios = axios.create({
    // baseURL: 'http://localhost:3200/api/',
    baseURL: 'http://192.168.112.162:3200/api/',
    'Content-Type': 'application/json',
});

export default instanceAxios;