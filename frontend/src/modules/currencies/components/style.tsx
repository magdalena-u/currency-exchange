import styled from 'styled-components';

import { colors } from 'styles/variables';

export const CurrencyTableContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-gap: 1rem 0.5rem;
    justify-items: center;
    align-items: center;

    background-color: ${colors.white};
    box-shadow: 1px 1px 15px 0px rgb(0, 0, 0, 0.4);

    border-radius: 20px;
    width: 25rem;
    height: 25rem;
    padding: 1rem;
`;

export const TitleTable = styled.h3`
    grid-column-start: 1;
    grid-column-end: 5;
    justify-self: start;

    margin: 0.5rem;
`;

export const TitleColumn = styled.h4`
    margin: 0;
`;
