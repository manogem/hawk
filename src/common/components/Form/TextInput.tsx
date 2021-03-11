import React from "react";
import {Field} from "formik";
import styled from "styled-components";
import {FormFieldContainer, StyledErrorMessage, StyledLabel} from "./styled";

interface TestInputProps {
        name: string;
        placeholder: string;
        disabled?: boolean;
        errors?: any;
}

export const TextInput = ({name, placeholder, disabled, errors}: TestInputProps) => (
    <FormFieldContainer>
        <StyledLabel
            htmlFor={name}
        >
            {placeholder}
        </StyledLabel>
        <Field
            name={name}
        >
                {({field, form, meta}: { field: any, form: any, meta: any }) => (
                <React.Fragment>
                    <StyledInput
                        {...field}
                        type={'text'}
                        placeholder={placeholder}
                    />
                    {/*{meta.touched && meta.error && meta.error}*/}
                </React.Fragment>
            )}
        </Field>
        <StyledErrorMessage
            name={name}
            component={'div'}
        />
    </FormFieldContainer>
);


const StyledInput = styled.input`
    width: 100%;
`;

