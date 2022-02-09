import axios from 'axios';

const apiContrato = axios.create({
    baseURL : "http://localhost:8080/darlingjob/contrato"
});

export default apiContrato;