import React from 'react';
import styled from 'styled-components';

import { CurrencyContainer } from 'modules/currencies/containers/CurrencyContainer';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;
`;
const Index = () => (
    <Wrapper>
        <CurrencyContainer />
    </Wrapper>
);

export default Index;
