import axios from 'axios';

const api = axios.create({
    baseURL:'http://milvus.ddns.net:5000/api'
})

export default api;