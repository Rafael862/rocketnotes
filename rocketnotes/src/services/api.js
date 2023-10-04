import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketnotes-api-v0z9.onrender.com"
});

