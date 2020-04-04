import styled, { keyframes, css } from 'styled-components';
import React from 'react';

import { colors, fontSize } from 'styles/variables';
import { Button } from 'modules/common/Button';

interface PropsRectangle {
    isLogin?: boolean;
    isAnimate?: boolean;
}

interface Props {
    handleClick: (arg: boolean) => void;
    isLogin: boolean;
}

const transformScale = ({ isLogin }: PropsRectangle) => keyframes`

0%{
    transform: scaleX(1);
    transform-origin: ${isLogin ? '0% 50%' : '100% 50%'}
}
15%{
    transform: scaleX(1.5);
}
85%{
    transform: scaleX(1.5);
}

100% {
    transform: scaleX(1);
    transform-origin: ${isLogin ? '100% 50%' : '0% 50%'}
}
`;

const transformScaleOfMovingElement = () => css`
    ${transformScale} 0.7s;
    animation-iteration-count: 1;
`;

const Wrapper = styled.div<PropsRectangle>`
    position: absolute;
    top: 0;
    left: 0;
    transform: ${props => (props.isLogin ? 'translateX(0)' : 'translateX(100%)')};

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${colors.white};

    width: 50%;
    height: 100%;

    z-index: 3;
    transition: transform 0.5s 0.1s, background-position 0.5s 0.1s;
`;

const Rectangle = styled.div<PropsRectangle>`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: linear-gradient(
        -45deg,
        ${colors.yellow},
        ${colors.yellowLight},
        ${colors.blue},
        ${colors.blueDark}
    );

    background-size: 200% 100%;
    background-position: ${props => (props.isLogin ? '0 50%' : '100% 50%')};
    transition: background-position 0.5s;

    z-index: -1;
    animation: ${props => props.isAnimate && transformScaleOfMovingElement};
`;

const RouteButton = styled(Button)`
    background-color: transparent;
    border: 1px solid ${colors.white};
    border-radius: 6px;
    margin-top: 1rem;

    font-size: ${fontSize.normal};
`;

const ParagraphWrapper = styled.div`
    padding: 1rem 0;
`;

const Paragraph = styled.p`
    font-size: ${fontSize.medium};
    margin: 0.7rem;
`;

const TextWrapper = styled.div`
    height: 25rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const LoginText = () => (
    <>
        <h1>Hi you!</h1>
        <ParagraphWrapper>
            <Paragraph>We are glad to see you again</Paragraph>
            <Paragraph>Enter your personal data</Paragraph>
            <Paragraph>and start work</Paragraph>
        </ParagraphWrapper>
        <Paragraph>If you have no account</Paragraph>
    </>
);

const RegisterText = () => (
    <>
        <h1>Welcome!</h1>
        <ParagraphWrapper>
            <Paragraph>We are more than happy,</Paragraph>
            <Paragraph>that you want to join us</Paragraph>
        </ParagraphWrapper>
        <Paragraph>Although if you have already account</Paragraph>
    </>
);

export const Board: React.FC<Props> = ({ isLogin, handleClick }) => {
    const [isAnimate, setIsAnimate] = React.useState(false);

    return (
        <Wrapper isLogin={isLogin}>
            <Rectangle
                isLogin={isLogin}
                isAnimate={isAnimate}
                onAnimationEnd={() => setIsAnimate(false)}
            />
            <TextWrapper>
                {isLogin ? <LoginText /> : <RegisterText />}
                <RouteButton
                    onClick={() => {
                        handleClick(!isLogin);
                        setIsAnimate(true);
                    }}
                >
                    {isLogin ? 'create account' : 'log in'}
                </RouteButton>
            </TextWrapper>
        </Wrapper>
    );
};
