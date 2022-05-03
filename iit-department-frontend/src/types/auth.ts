export interface IAuth {
    accessToken: string;
    refreshToken: string;
}

export interface ILogin {
    login: string;
    password: string;
}

export interface ISiignUp {
    firstName: string;
    lastName: string;
    login: string;
    password: string;
}