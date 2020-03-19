import { apiCurrency, apiProxy, apiBase } from 'config/apiBase';
import { currencyServiceFactory } from 'modules/currencies/services';
import { authServiceFactory } from 'modules/auth/services';

export const currencyService = currencyServiceFactory(apiProxy, apiCurrency);
export const authService = authServiceFactory(apiProxy, apiBase);
