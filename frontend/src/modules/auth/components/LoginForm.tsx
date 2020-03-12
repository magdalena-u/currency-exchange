import React from 'react';
import { Formik, Field } from 'formik';

import { loginSchema } from 'modules/auth/schema';
import { Button } from 'modules/common/Button';
import { FormWrapper, Title, FormContainer, RouteButton } from './Form';
import { Input } from './Input';

interface Props {
    handleClick: (arg: boolean) => void;
}

const initialValues = { email: '', password: '' };

export const LoginForm: React.FC<Props> = ({ handleClick }) => {
    const submitLogin = () => {};

    return (
        <FormWrapper>
            <Formik
                initialValues={initialValues}
                validationSchema={loginSchema()}
                onSubmit={values => submitLogin()}
            >
                {({ handleSubmit }) => (
                    <FormContainer onSubmit={handleSubmit}>
                        <Title>{'Login'}</Title>
                        <Field type="email" label="E-mail" name="email" component={Input} />
                        <Field type="password" label="Password" name="password" component={Input} />
                        <Button type="submit">{'Login'} </Button>
                        <RouteButton onClick={() => handleClick(false)}>
                            {'I would like to join'}
                        </RouteButton>
                    </FormContainer>
                )}
            </Formik>
        </FormWrapper>
    );
};
