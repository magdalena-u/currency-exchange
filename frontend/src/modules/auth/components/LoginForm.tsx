import React from 'react';
import styled from 'styled-components';
import { Formik, Field } from 'formik';

import { loginSchema } from 'modules/auth/schema';
import { Button } from 'modules/common/Button';
import { FormWrapperLogin, Title, FormContainer } from './Form';
import { Input } from './Input';
import { Credentials } from '../models';

import { colors } from 'styles/variables';

interface Props {
    loginRequest: (values: Credentials) => void;
    isLogin?: boolean;
}

const initialValues = { email: '', password: '' };

const ButtonWrapper = styled(Button)`
    background-color: ${colors.blue};
`;

export const LoginForm: React.FC<Props> = ({ loginRequest, isLogin }) => (
    <FormWrapperLogin isLogin={isLogin}>
        <Formik
            initialValues={initialValues}
            validationSchema={loginSchema()}
            onSubmit={loginRequest}
        >
            <FormContainer>
                <Title>Login</Title>
                <Field type="email" label="E-mail" name="email" component={Input} />
                <Field type="password" label="Password" name="password" component={Input} />
                <ButtonWrapper type="submit">Login</ButtonWrapper>
            </FormContainer>
        </Formik>
    </FormWrapperLogin>
);
