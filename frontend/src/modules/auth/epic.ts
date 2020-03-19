import { ofType, combineEpics } from 'redux-observable';
import { switchMap, pluck } from 'rxjs/operators';

import { Epic } from 'config/rootEpic';
import * as action from './actions';
import { Credentials } from './models';

export const authEpicFactory = (authService: any): Epic => {
    const postLoginEpic: Epic = (action$: any) =>
        action$.pipe(
            ofType(action.LOGIN_REQUEST),
            pluck('payload'),
            switchMap((values: Credentials) =>
                authService
                    .login(values)
                    .then(action.loginSuccess)
                    .catch(action.loginFailure),
            ),
        );

    return combineEpics(postLoginEpic);
};
