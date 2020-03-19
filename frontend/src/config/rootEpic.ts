import { combineEpics, Epic as _Epic } from 'redux-observable';

import { currencyService, authService } from 'config/rootService';
import { AppAction } from 'config/rootAction';

import { currencyEpicFactory } from 'modules/currencies/epic';
import { authEpicFactory } from 'modules/auth/epic';

export type Epic = _Epic<AppAction>;

export const rootEpic = combineEpics(
    currencyEpicFactory(currencyService),
    authEpicFactory(authService),
);
