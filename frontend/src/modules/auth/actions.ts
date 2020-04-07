import { Action } from 'config/rootAction';
import { Credentials } from './models';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export type RegisterRequestAction = Action<typeof REGISTER_REQUEST>;
export const registerRequest = (values: Credentials) => ({
    type: REGISTER_REQUEST,
    payload: values,
});

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export type RegisterSuccessAction = Action<typeof REGISTER_SUCCESS>;
export const registerSuccess = () => ({ type: REGISTER_SUCCESS });

export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export type RegisterFailureAction = Action<typeof REGISTER_FAILURE>;
export const registerFailure = (error: string) => ({ type: REGISTER_FAILURE, payload: error });

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export type LoginRequestAction = Action<typeof LOGIN_REQUEST>;
export const loginRequest = (values: Credentials) => ({ type: LOGIN_REQUEST, payload: values });

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export type LoginSuccessAction = Action<typeof LOGIN_SUCCESS>;
export const loginSuccess = () => ({
    type: LOGIN_SUCCESS,
});

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export type LoginFailureAction = Action<typeof LOGIN_FAILURE>;
export const loginFailure = (error: string) => ({ type: LOGIN_FAILURE, payload: error });

export type registerAction = RegisterRequestAction | RegisterSuccessAction | RegisterFailureAction;
export type loginAction = LoginRequestAction | LoginSuccessAction | LoginFailureAction;
