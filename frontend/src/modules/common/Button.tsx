import styled from 'styled-components';

import { colors, fontSize, fontWeight } from 'styles/variables';

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${colors.white};
    outline: transparent 0;
    border: none;
    border-radius: 5px;
    font-size: ${fontSize.normal};
    background-color: transparent;
    padding: 1rem 2rem;
    text-transform: uppercase;
    font-weight: ${fontWeight.bold};

    cursor: pointer;

    :focus,
    :active {
        outline: transparent 0;
    }
`;
