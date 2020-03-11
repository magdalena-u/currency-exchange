import React from 'react';
import { FieldProps } from 'formik';
import { ErrorMessage, InputContainer, Label, InputStyled } from './Form';

interface Props {
    label: string;
}
export const Input: React.FC<FieldProps & Props> = ({
    field: { onChange, value, ...field },
    form: { errors, touched },
    label,
    ...props
}) => {
    const errorMsg = touched[field.name] && errors[field.name];

    return (
        <InputContainer>
            <Label>{label}</Label>
            <InputStyled value={value} onChange={onChange} {...field} {...props} />

            {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
        </InputContainer>
    );
};
