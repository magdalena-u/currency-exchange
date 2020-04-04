import styled from 'styled-components';
import { Form } from 'formik';

import { colors, fontSize } from 'styles/variables';

interface WrapperProps {
    isLogin?: boolean;
    transformA?: string;
    transformB?: string;
}
export const FormWrapper = styled.div<WrapperProps>`
    width: 50%;
    display: flex;
    justify-content: center;

    position: absolute;
    left: 0;
`;

export const FormWrapperRegister = styled(FormWrapper)`
    transform: ${props => (props.isLogin ? 'translateX(50%);' : 'translateX(0%);')};
    opacity: ${props => (props.isLogin ? '0;' : '1;')};
    transition: ${props =>
        props.isLogin ? 'transform 0.8s, opacity 0.3s' : 'opacity 0.3s 0.2s, transform 0.5s'};
    z-index: ${props => (props.isLogin ? '-1' : '0')};
`;

export const FormWrapperLogin = styled(FormWrapper)`
    transform: ${props => (props.isLogin ? 'translateX(100%);' : 'translateX(50%);')};
    opacity: ${props => (props.isLogin ? '1;' : '0;')};
    transition: ${props =>
        props.isLogin ? 'transform 0.8s, opacity 0.3s 0.2s' : 'opacity 0.3s, transform 0.5s'};
    z-index: ${props => (props.isLogin ? '0' : '-1')};
`;

export const FormContainer = styled(Form)`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: ${colors.white};
    color: ${colors.black};
    box-shadow: 1px 1px 15px 0px rgb(0, 0, 0, 0.4);

    border-radius: 6px;
    width: 18rem;
    height: 25rem;
    padding: 2rem;
`;

export const Title = styled.h1`
    font-size: ${fontSize.extraLarge};
    margin: 0 0 1rem;
`;

export const InputContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

    padding-bottom: 1.5rem;
`;

export const Label = styled.label`
    padding-bottom: 1rem;
`;

export const InputStyled = styled.input`
    height: 2rem;
    padding-left: 1rem;

    font-size: ${fontSize.normal};

    background: transparent;

    border: none;
    border-bottom: 2px solid ${colors.blueGray};
    outline: transparent 0;

    :active,
    :focus {
        outline: transparent 0;
    }
`;

export const ErrorMessage = styled.span`
    position: absolute;
    bottom: 0;

    color: ${colors.pink};
    font-size: ${fontSize.small};
`;
