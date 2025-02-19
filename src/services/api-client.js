import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '99943f0747e34b5d84b7a952736d4af4'
    }
});

export default apiClient;
