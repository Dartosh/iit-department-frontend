import axios from "axios";

const BACKEND_BASE_URL = '127.0.0.1:8000/';

export const getLatestNews = async (): Promise<string> => {
    const res = await axios(BACKEND_BASE_URL + '/api/v1/feed');

    return await res.data;
}