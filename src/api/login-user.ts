import axios from "axios";

const BACKEND_BASE_URL = 'http://127.0.0.1:8000/';
const username = 'admin';
const password = 'admin';

const loginUser = async (): Promise<any> => {
    const response = await axios({
        // await axios({
        method: 'post',
        url: BACKEND_BASE_URL + 'auth/jwt/create/',
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json",
        },
        data: {
            "username": `${username}`,
            "password": `${password}`,
        }
    });
    const json = response.data.json();
    console.log(json);
    return json;
}

export default loginUser;