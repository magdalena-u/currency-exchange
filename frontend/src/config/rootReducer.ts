import { combineReducers } from 'redux';

import { currency } from 'modules/currencies/reducers';
import { login } from 'modules/auth/reducers';

export const rootReducer = combineReducers({
    currency: currency,
    auth: login,
});

export type AppState = ReturnType<typeof rootReducer>;
