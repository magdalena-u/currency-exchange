import { ActionType } from 'typesafe-actions';

import * as currencyAction from 'modules/currencies/actions';
import * as authAction from 'modules/auth/actions';

const rootAction = {
    currency: currencyAction,
    auth: authAction,
};

export type AppAction = ActionType<typeof rootAction>;

export interface Action<T, P = null> {
    readonly type: T;
    readonly payload: P;
}
