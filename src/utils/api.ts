import axios from "axios";

const config = {
    baseURL: "http://localhost:3000/remedios"
}

const api = axios.create(config)

export default api;