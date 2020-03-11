import * as yup from 'yup';

export const loginSchema = () =>
    yup.object().shape({
        email: yup
            .string()
            .email('Email must be a valid email address')
            .required('Required field'),
        password: yup
            .string()
            .min(3, 'Password must be at least 3 characters')
            .required('Required field'),
    });

export const registerSchema = () =>
    yup.object().shape({
        email: yup
            .string()
            .email('Email must be a valid email address')
            .required('Required field'),
        password: yup
            .string()
            .min(3, 'Password must be at least 3 characters')
            .required('Required field'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), ''], 'Passwords must match')
            .min(3)
            .required('Required field'),
    });
