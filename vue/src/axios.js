import axios from "axios";
import store from "./store";

const BASE_URL = axios.create({
    baseURL: 'http://localhost:8000/api'
});

BASE_URL.interceptors.request.use(config => {

    config.headers.Authorization = `Bearer ${store.state.user.token}`;

    return config;
});

export default BASE_URL;