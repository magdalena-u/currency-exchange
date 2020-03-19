import React from 'react';
import { connect } from 'react-redux';

import { currencyRequest } from 'modules/currencies/actions';
import { AppState } from 'config/rootReducer';
import { CurrencyTable } from 'modules/currencies/components/CurrencyTable';

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const Currency: React.FC<Props> = props => {
    React.useEffect(() => {
        props.currencyRequest();
    }, []);

    return <CurrencyTable {...props} />;
};

const mapStateToProps = (state: AppState) => ({
    currency: state.currency,
});

const mapDispatchToProps = { currencyRequest };

export const CurrencyContainer = connect(mapStateToProps, mapDispatchToProps)(Currency);
