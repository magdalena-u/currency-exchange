import { combineReducers } from 'redux';

import { currency } from 'modules/currencies/reducers';
import { login, register } from 'modules/auth/reducers';

export const rootReducer = combineReducers({
    currency: currency,
    auth: login,
    register: register,
});

export type AppState = ReturnType<typeof rootReducer>;
