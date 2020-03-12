import { apiCurrency, apiProxy } from 'config/apiBase';
import { currencyServiceFactory } from 'modules/currencies/services';

export const currencyService = currencyServiceFactory(apiProxy, apiCurrency);
