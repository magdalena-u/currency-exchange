import { loginAction, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actions';
import { LoginDataState, LoginState } from './models';

const initialLoginDataState: LoginDataState = {
    token: '',
};

const initialLoginState: LoginState = {
    isFetching: false,
    data: initialLoginDataState,
    error: '',
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
