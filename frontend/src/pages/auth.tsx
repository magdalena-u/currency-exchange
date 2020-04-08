import React from 'react';
import styled from 'styled-components';

import { LoginContainer } from 'modules/auth/containers/Login';
import { RegisterContainer } from 'modules/auth/containers/Register';
import { Board } from 'modules/auth/components/Board';

interface Props {
    isLogin?: boolean;
}

const Wrapper = styled.section<Props>`
    position: relative;

    display: flex;
    align-items: center;

    width: 100vw;
    height: 100vh;
`;

const Auth = () => {
    const [isLogin, setIsLogin] = React.useState(false);

    return (
        <Wrapper isLogin={isLogin}>
            <LoginContainer isLogin={isLogin} />
            <RegisterContainer isLogin={isLogin} />
            <Board handleClick={setIsLogin} isLogin={isLogin} />
        </Wrapper>
    );
};

export default Auth;
