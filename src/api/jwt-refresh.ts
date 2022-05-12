const BACKEND_BASE_URL = 'http://127.0.0.1:8000/';

const data = {
    // refresh: useSelector(store => store?.tokens?.re),
}

const loginUser = async (): Promise<any> => {
    const res = await fetch(
        BACKEND_BASE_URL + 'auth/jwt/create/',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }
    );
    return await res.json();
}

export default loginUser;