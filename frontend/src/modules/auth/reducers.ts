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
import { RegisterDataState, LoginDataState, LoginState } from './models';

const initialRegisterState = {
    isFetching: false,
    isSucceed: false,
    error: '',
};

const initialLoginDataState: LoginDataState = {
    token: '',
};

const initialLoginState: LoginState = {
    isFetching: false,
    data: initialLoginDataState,
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
                data: action.payload,
                error: '',
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
