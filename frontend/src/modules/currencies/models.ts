export interface CurrencyItemState {
    name: string;
    code: string;
    unit: number;
    purchasePrice: number;
    sellPrice: number;
    averagePrice: number;
}

export interface CurrencyDataState {
    publicationDate: string;
    items: CurrencyItemState[];
}

export interface CurrencyState {
    isFetching: false;
    data: CurrencyDataState;
    error: string;
}
