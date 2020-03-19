export interface LoginDataState {
    token: string;
}

export interface LoginState {
    isFetching: boolean;
    data: LoginDataState;
    error: string;
}

export interface Credentials {
    email: string;
    password: string;
}
