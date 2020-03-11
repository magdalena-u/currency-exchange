import React from 'react';
import { LoginContainer } from 'modules/auth/containers/Login';
import { RegisterContainer } from 'modules/auth/containers/Register';

const Auth = () => {
    const [isLogin, setIsLogin] = React.useState(false);

    return (
        <>
            {isLogin ? (
                <LoginContainer handleClick={setIsLogin} />
            ) : (
                <RegisterContainer handleClick={setIsLogin} />
            )}
        </>
    );
};

export default Auth;
