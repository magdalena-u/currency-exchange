import React from 'react';
import styled from 'styled-components';
import { Formik, Field } from 'formik';

import { colors } from 'styles/variables';
import { registerSchema } from 'modules/auth/schema';
import { Credentials } from 'modules/auth/models';

import { Button } from 'modules/common/Button';
import { Spinner, SpinnerCompleted } from 'modules/common/Spinner';

import { Title, FormContainer, FormWrapperRegister } from './Form';
import { Input } from './Input';

interface PropsRegister {
    isFetching: boolean;
    isSucceed: boolean;
}

interface Props {
    registerRequest: (arg: Credentials) => void;
    isLogin?: boolean;
    register: PropsRegister;
}

const ButtonWrapper = styled(Button)`
    background-color: ${colors.yellowLight};
`;

const inputs = [
    { name: 'email', type: 'text', value: 'email', label: 'E-mail' },
    { name: 'password', type: 'password', value: 'password', label: 'Password' },
    {
        name: 'confirmPassword',
        type: 'password',
        value: 'confirmPassword',
        label: 'Confirm Password',
    },
];

const initialData = {
    email: '',
    password: '',
    confirmPassword: '',
};

export const RegisterForm: React.FC<Props> = ({ registerRequest, isLogin, ...props }) => (
    <FormWrapperRegister isLogin={isLogin}>
        <Formik
            initialValues={initialData}
            validationSchema={registerSchema()}
            onSubmit={registerRequest}
        >
            {({ handleSubmit }) => (
                <FormContainer onSubmit={handleSubmit}>
                    <Title>Register</Title>
                    {inputs.map(input => (
                        <Field
                            key={input.name}
                            type={input.type}
                            label={input.label}
                            name={input.value}
                            component={Input}
                        />
                    ))}
                    <ButtonWrapper type="submit">Sign up</ButtonWrapper>
                </FormContainer>
            )}
        </Formik>
        {props.register.isFetching && <Spinner />}
        {props.register.isSucceed && <SpinnerCompleted />}
    </FormWrapperRegister>
);
