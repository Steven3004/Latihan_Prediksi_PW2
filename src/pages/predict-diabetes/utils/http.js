import axios from 'axios';

const http = axios.create({
    baseURL : "https://localhost:8000/api",
    headers : {
        Accept : "application/json",
    }
})

export default http;