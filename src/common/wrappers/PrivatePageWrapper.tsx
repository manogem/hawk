import React, { useEffect } from 'react';
import { PUBLIC_ROUTES } from "../../config/routes";
import { useHistory } from "react-router";
import { storage } from "../services/StorageService";
import { AppApi } from "../services/ApiService";
import { useDispatch, useSelector } from "react-redux";
import { authenticationTokenSelector } from "../../store/authenticationToken/selectors";
import { logout, refreshAuthenticationToken } from "../../store/authenticationToken/actions";
import { PERSISTENT_STORE } from "../../store";

interface PrivatePageWrapperProps {
    children: React.ReactNode;
}

export const PrivatePageWrapper = ({children}: PrivatePageWrapperProps) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const authTokenState = useSelector(authenticationTokenSelector);

    useEffect((): any => {
        if (!authTokenState && !storage.getObject(PERSISTENT_STORE).authenticationToken?.token) {
            history.push(`/${PUBLIC_ROUTES.LOGIN}`)
        }
    }, [authTokenState]);

    AppApi.interceptors.response.use(
        undefined,
        (error) => {
            if (error.response.status === 401) {
                dispatch(
                    refreshAuthenticationToken({
                        refresh_token: storage.getObject(PERSISTENT_STORE).authenticationToken?.refreshToken
                    })
                );

                return null;
            }
        }
    );

    return (
        <React.Fragment>
            <button onClick={() => dispatch(logout())}>
                Logout
            </button>
            {children}
        </React.Fragment>
    );
};