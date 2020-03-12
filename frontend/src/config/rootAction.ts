import { ActionType } from 'typesafe-actions';

import * as currencyAction from 'modules/currencies/actions';

const rootAction = {
    currency: currencyAction,
};

export type AppAction = ActionType<typeof rootAction>;

export interface Action<T, P = null> {
    readonly type: T;
    readonly payload: P;
}
