import React, { useEffect } from 'react';
import { LoginForm } from "./LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthenticationToken, refreshAuthenticationToken } from "../../../../../store/authenticationToken/actions";
import {
    authenticationTokenSelector,
    statusSelector
} from "../../../../../store/authenticationToken/selectors";
import { useHistory } from "react-router-dom";
import { PRIVATE_ROUTES } from "../../../../../config/routes";
import { storage } from "../../../../../common/services/StorageService";
import { PERSISTENT_STORE } from "../../../../../store";
import { Formik, FormikHelpers } from "formik";
import { ILoginForm } from "./ILoginForm";
import { loginFormValidationSchema } from "./validationSchema";
import { useIntl } from "react-intl";
import { WithHelmetProps } from "../../../../../common/components/HOC/withHelmet";

const loginFormInitialValues = {
    username: '',
    password: ''
};

const LoginFormContainer = ({messagePrefix}: WithHelmetProps) => {
    const messagePrefixValue = `${messagePrefix}.loginForm`;
    const routeToRedirectAfterSuccessfulLogin = `/${PRIVATE_ROUTES.DASHBOARD}`;

    const history = useHistory();
    const dispatch = useDispatch();
    const intl = useIntl();

    const authTokenState = useSelector(authenticationTokenSelector);
    const statusState = useSelector(statusSelector);

    useEffect((): any => {
        if (authTokenState) {
            history.push(routeToRedirectAfterSuccessfulLogin)
        } else if (storage.getObject(PERSISTENT_STORE).authenticationToken?.refreshToken) {
            dispatch(
                refreshAuthenticationToken({
                    refresh_token: storage.getObject(PERSISTENT_STORE).authenticationToken.refreshToken
                })
            );
        }
    }, [authTokenState]);

    const doAuthentication = (values: ILoginForm, actions: FormikHelpers<ILoginForm>) => {
        dispatch(fetchAuthenticationToken(values, actions));
    };

    return (
        <Formik
            initialValues={loginFormInitialValues}
            validationSchema={loginFormValidationSchema(intl, messagePrefixValue)}
            onSubmit={doAuthentication}
        >
            {({isSubmitting}) => (
                <LoginForm
                    messagePrefix={messagePrefixValue}
                    isFetching={isSubmitting}
                    status={statusState}
                />
            )}
        </Formik>
    );
};

export default LoginFormContainer;