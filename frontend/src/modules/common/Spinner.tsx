import React from 'react';
import styled, { keyframes } from 'styled-components';

import { colors } from 'styles/variables';

import { ReactComponent as Tick } from '../../image/tick.svg';

const loading = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
    position: absolute;
    top: calc(50% - 1rem);
    left: calc(50% - 1rem);

    width: 2.5rem;
    height: 2.5rem;
    border: 4px solid ${colors.blueGray};
    border-left: 4px solid ${colors.yellowLight};
    border-radius: 50%;

    animation: ${loading} 1.1s infinite linear;
`;

const CircleCompleted = styled.div`
    position: absolute;
    top: calc(50% - 1rem);
    left: calc(50% - 1rem);

    display: flex;
    justify-content: center;
    align-items: center;

    width: 2.5rem;
    height: 2.5rem;
    border: 4px solid ${colors.yellowLight};
    border-radius: 50%;
`;

export const SpinnerCompleted = () => (
    <CircleCompleted>
        <Tick />
    </CircleCompleted>
);
