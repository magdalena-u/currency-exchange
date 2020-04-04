import React from 'react';
import { RegisterForm } from 'modules/auth/components/RegisterForm';
import { AppState } from 'config/rootReducer';
import { connect } from 'react-redux';
import { registerRequest } from 'modules/auth/actions';

interface EventProps {
    isLogin?: boolean;
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & EventProps;

const Register: React.FC<Props> = props => <RegisterForm {...props} />;

const mapStateToProps = (state: AppState) => ({
    register: state.register,
});

const mapDispatchToProps = { registerRequest };

export const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);
