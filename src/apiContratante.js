import axios from 'axios';

const apiContratante = axios.create({
    baseURL : "http://localhost:8080/darlingjob/contratante"
});

export default apiContratante;