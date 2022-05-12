const BACKEND_BASE_URL = 'http://127.0.0.1:8000/';
const data = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUyNDc3ODY2LCJqdGkiOiI0OWU2ODc0N2NhZTY0ZDE5YmY3ZGM3NTc4MDVmYzc5NSIsInVzZXJfaWQiOjF9.s9yPoFpkFNLsVKguaANI8AOqUWiPIdciQu9wjss3Qjc";

const getPostsPagination = async (): Promise<any> => {
    const res = await fetch(
        BACKEND_BASE_URL + 'api/v1/wall/1',
        {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `JWT ${data}`,
            },
        }
    );
    return await res.json();
}

export default getPostsPagination;