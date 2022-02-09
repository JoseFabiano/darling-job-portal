import axios from 'axios';

const apiContratada = axios.create({
    baseURL : "http://localhost:8080/darlingjob/contratado"
});

export default apiContratada;