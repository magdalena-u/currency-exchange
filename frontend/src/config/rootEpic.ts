import { combineEpics, Epic as _Epic } from 'redux-observable';

import { currencyService } from 'config/rootService';
import { AppAction } from 'config/rootAction';

import { currencyEpicFactory } from 'modules/currencies/epic';

export type Epic = _Epic<AppAction>;

export const rootEpic = combineEpics(currencyEpicFactory(currencyService));
