import axios from 'axios';

const http = axios.create({
    baseURL : "https://if31flask-python-steven-production.up.railway.app/",
    headers : {
        Accept : "application/json",
    }
})

export default http;