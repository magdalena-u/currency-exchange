import styled from 'styled-components';
import { Form } from 'formik';

import { colors, fontSize } from 'styles/variables';
import { Button } from 'modules/common/Button';

export const FormWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const FormContainer = styled(Form)`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: ${colors.white};
    color: ${colors.black};
    box-shadow: 1px 1px 15px 0px rgb(0, 0, 0, 0.4);

    border-radius: 20px;
    width: 18rem;
    height: 25rem;
    padding: 2rem;
`;

export const Title = styled.h1`
    font-size: ${fontSize.extraLarge};
    margin: 0 0 1rem;
`;

export const RouteButton = styled(Button)`
    background-color: transparent;
    color: ${colors.darkGrey};

    text-decoration: underline;
    font-size: ${fontSize.small};
    margin-top: 1rem;
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

    color: ${colors.red};
    font-size: ${fontSize.small};
`;
