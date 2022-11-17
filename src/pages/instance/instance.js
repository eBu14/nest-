import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://dummyapi.io/data/v1/',
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "app-id": "636a0100b23c1794f297d097"
    }
})