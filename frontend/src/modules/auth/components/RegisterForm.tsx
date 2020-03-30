import React from 'react';
import { Formik, Field } from 'formik';

import { registerSchema } from 'modules/auth/schema';
import { Button } from 'modules/common/Button';
import { Title, FormContainer, RouteButton, FormWrapper } from './Form';
import { Input } from './Input';

import { Credentials } from 'modules/auth/models';

interface Props {
    handleClick: (arg: boolean) => void;
    registerRequest: (arg: Credentials) => void;
}
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

export const RegisterForm: React.FC<Props> = ({ handleClick, registerRequest }) => (
    <FormWrapper>
        <Formik
            initialValues={initialData}
            validationSchema={registerSchema()}
            onSubmit={registerRequest}
        >
            {({ handleSubmit }) => (
                <FormContainer onSubmit={handleSubmit}>
                    <Title>{'Register'}</Title>
                    {inputs.map(input => (
                        <Field
                            key={input.name}
                            type={input.type}
                            label={input.label}
                            name={input.value}
                            component={Input}
                        />
                    ))}
                    <Button type="submit">{'Sign up'}</Button>
                    <RouteButton onClick={() => handleClick(true)}>
                        {'I would like to login'}
                    </RouteButton>
                </FormContainer>
            )}
        </Formik>
    </FormWrapper>
);
