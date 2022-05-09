import axios from "axios";

const BACKEND_BASE_URL = 'http://127.0.0.1:8000/';

const username = 'admin';
const password = 'admin';

export const getUserJwt = async (): Promise<void> => {
    // const res = await axios({
    await axios({
        method: 'post',
        url: BACKEND_BASE_URL + 'auth/jwt/create/',
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json",
        },
        data: {
            "username": `${username}`,
            "password": `${password}`
        }
    })
        .then(res => console.log(res))
        .catch(error => console.log(error));
}