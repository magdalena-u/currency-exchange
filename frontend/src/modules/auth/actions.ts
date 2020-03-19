import { Action } from 'config/rootAction';
import { LoginDataState, Credentials } from './models';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export type LoginRequestAction = Action<typeof LOGIN_REQUEST>;
export const loginRequest = (values: Credentials) => ({ type: LOGIN_REQUEST, payload: values });

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export type LoginSuccessAction = Action<typeof LOGIN_SUCCESS>;
export const loginSuccess = (loginData: LoginDataState) => ({
    type: LOGIN_SUCCESS,
    payload: loginData,
});

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export type LoginFailureAction = Action<typeof LOGIN_FAILURE>;
export const loginFailure = (error: string) => ({ type: LOGIN_FAILURE, payload: error });

export type loginAction = LoginRequestAction | LoginSuccessAction | LoginFailureAction;
