import React from 'react';

import { Button } from 'modules/common/Button';
import {
    CurrencyTableContainer,
    TitleTable,
    TitleColumn,
} from 'modules/currencies/components/style';
import { CurrencyItemState, CurrencyState } from 'modules/currencies/models';
import { currencyRequest } from '../actions';

interface Props {
    currency: CurrencyState;
    currencyRequest: typeof currencyRequest;
}

export const CurrencyTable: React.FC<Props> = props => (
    <CurrencyTableContainer>
        <TitleTable>Currencies</TitleTable>
        <TitleColumn>Currency</TitleColumn>
        <span>Unit</span>
        <span>Value</span>
        <span>Actions</span>
        {props.currency.data.items.map((item: CurrencyItemState) => (
            <React.Fragment key={item.code}>
                <span>{item.code}</span>
                <span>{item.unit}</span>
                <span>{item.purchasePrice}</span>
                <Button>Buy</Button>
            </React.Fragment>
        ))}
    </CurrencyTableContainer>
);
