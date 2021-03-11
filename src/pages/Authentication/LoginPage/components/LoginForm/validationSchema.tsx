import React from "react";
import * as Yup from 'yup';

export const loginFormValidationSchema = (intl: any, messagePrefix?: string) => Yup.object({
    username: Yup.string()
        .required(intl.formatMessage({id: `${messagePrefix}.validation.username.required`}))
        .min(4, intl.formatMessage({id: `${messagePrefix}.validation.username.min`}, { value: 4 }))
        .max(100, intl.formatMessage({id: `${messagePrefix}.validation.username.max`}, { value: 100 }))
    ,
    password: Yup.string()
        .required(intl.formatMessage({id: `${messagePrefix}.validation.password.required`}))
        .min(4, intl.formatMessage({id: `${messagePrefix}.validation.username.min`}, { value: 4 }))
        .max(255, intl.formatMessage({id: `${messagePrefix}.validation.username.min`}, { value: 255 }))
    ,
});
