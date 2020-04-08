export interface RegisterDataState {
    isFetching: boolean;
    isSucceed: boolean;
    error: string;
}

export interface LoginState {
    isFetching: boolean;
    isAuthenticated: boolean;
    error: string;
}

export interface Credentials {
    email: string;
    password: string;
}
