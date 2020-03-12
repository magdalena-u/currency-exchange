import { combineEpics, ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';

import { Epic } from 'config/rootEpic';
import * as action from './actions';

export const currencyEpicFactory = (currencyService: any): Epic => {
    const getCurrencyEpic: Epic = (action$: any) =>
        action$.pipe(
            ofType(action.CURRENCY_REQUEST),
            switchMap(() =>
                currencyService
                    .getCurrency()
                    .then(action.currencySuccess)
                    .catch(action.currencyFailure),
            ),
        );

    return combineEpics(getCurrencyEpic);
};
