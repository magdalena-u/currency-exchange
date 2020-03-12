import { combineReducers } from 'redux';

import { currency } from 'modules/currencies/reducers';

export const rootReducer = combineReducers({
    currency: currency,
});

export type AppState = ReturnType<typeof rootReducer>;
