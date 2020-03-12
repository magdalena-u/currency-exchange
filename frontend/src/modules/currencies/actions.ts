import { Action } from 'config/rootAction';
import { CurrencyDataState } from './models';

export const CURRENCY_REQUEST = 'CURRENCY_REQUEST';
export type CurrencyRequestedAction = Action<typeof CURRENCY_REQUEST>;
export const currencyRequest = () => ({ type: CURRENCY_REQUEST });

export const CURRENCY_SUCCESS = 'CURRENCY_SUCCESS';
export type CurrencySuccessAction = Action<typeof CURRENCY_SUCCESS>;
export const currencySuccess = (currencyData: CurrencyDataState) => ({
    type: CURRENCY_SUCCESS,
    payload: currencyData,
});

export const CURRENCY_FAILURE = 'CURRENCY_FAILURE';
export type CurrencyFailureAction = Action<typeof CURRENCY_FAILURE>;
export const currencyFailure = (error: string) => ({ type: CURRENCY_FAILURE, payload: error });

export type currencyAction =
    | CurrencyRequestedAction
    | CurrencySuccessAction
    | CurrencyFailureAction;
