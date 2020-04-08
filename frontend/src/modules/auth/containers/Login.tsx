import React from 'react';
import { connect } from 'react-redux';

import { AppState } from 'config/rootReducer';
import { LoginForm } from 'modules/auth/components/LoginForm';
import { loginRequest } from 'modules/auth/actions';

interface EventProps {
    isLogin?: boolean;
}
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & EventProps;

const Login: React.FC<Props> = props => <LoginForm {...props} />;

const mapStateToProps = (state: AppState) => ({
    auth: state.auth,
});

const mapDispatchToProps = { loginRequest };

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
