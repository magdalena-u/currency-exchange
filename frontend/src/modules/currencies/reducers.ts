import { currencyAction, CURRENCY_REQUEST, CURRENCY_SUCCESS, CURRENCY_FAILURE } from './actions';
import { CurrencyState, CurrencyDataState, CurrencyItemState } from './models';

const initialCurrencyItemState: CurrencyItemState = {
    name: '',
    code: '',
    unit: 0,
    purchasePrice: 0,
    sellPrice: 0,
    averagePrice: 0,
};

const initialCurrencyDataState: CurrencyDataState = {
    publicationDate: '',
    items: [initialCurrencyItemState],
};

const initialCurrencyState: CurrencyState = {
    isFetching: false,
    data: initialCurrencyDataState,
    error: '',
};

export const currency = (state: CurrencyState = initialCurrencyState, action: currencyAction) => {
    switch (action.type) {
        case CURRENCY_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case CURRENCY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                error: '',
            };
        case CURRENCY_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
