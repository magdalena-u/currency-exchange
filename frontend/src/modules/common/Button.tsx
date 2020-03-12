import styled from 'styled-components';

import { colors, fontSize } from 'styles/variables';

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${colors.white};
    outline: transparent 0;
    border: none;
    border-radius: 5px;
    font-size: ${fontSize.normal};
    background-color: ${colors.green};
    padding: 0.5rem 1rem;

    cursor: pointer;

    :focus,
    :active {
        outline: transparent 0;
    }
`;
