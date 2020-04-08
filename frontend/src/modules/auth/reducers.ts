import Cookies from 'js-cookie';

import {
    loginAction,
    registerAction,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
} from './actions';
import { RegisterDataState, LoginState } from './models';

const initialRegisterState = {
    isFetching: false,
    isSucceed: false,
    error: '',
};

const initialLoginState: LoginState = {
    isFetching: false,
    isAuthenticated: Cookies.get('token') ? true : false,
    error: '',
};

export const register = (
    state: RegisterDataState = initialRegisterState,
    action: registerAction,
) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                isSucceed: true,
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const login = (state: LoginState = initialLoginState, action: loginAction) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: true,
                error: '',
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
