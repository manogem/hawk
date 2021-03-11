import {
    REFRESH_AUTHENTICATION_TOKEN_ERROR,
    GET_AUTHENTICATION_TOKEN_ERROR,
    GET_AUTHENTICATION_TOKEN_SUCCESS,
    REQUEST_AUTHENTICATION_TOKEN,
    LOGOUT_SUCCESS, REQUEST_LOGOUT
} from "./actionTypes";
import {
    authenticationApiClient,
    IRefreshToken,
    IUserData
} from "../../pages/Authentication/services/AuthenticationApiService";
import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import {FormikHelpers} from "formik";

const requestAuthenticationToken = () => {
    return {
        type: REQUEST_AUTHENTICATION_TOKEN
    }
};

const getAuthenticationTokenSuccess = (data: any) => {
    return {
        type: GET_AUTHENTICATION_TOKEN_SUCCESS,
        data
    }
};

const getAuthenticationTokenFailure = (error: any) => {
    return {
        type: GET_AUTHENTICATION_TOKEN_ERROR,
        error
    }
};

const refreshAuthenticationTokenFailure = (error: any) => {
    return {
        type: REFRESH_AUTHENTICATION_TOKEN_ERROR,
        error
    }
};

const requestLogout = () => {
    return {
        type: REQUEST_LOGOUT
    }
};

const logoutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS
    }
};

export const fetchAuthenticationToken = (userData: IUserData, actions: FormikHelpers<any>): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch(requestAuthenticationToken());

        authenticationApiClient().fetchAuthenticationToken(userData)
            .then(
                (response: any) => {
                    actions.setSubmitting(false);

                    dispatch(getAuthenticationTokenSuccess(response.data))
                },
                (error: any) => {
                    actions.setSubmitting(false);
                    actions.setErrors(error.response);

                    dispatch(getAuthenticationTokenFailure(error.response));
                }
            );
    }
};

export const refreshAuthenticationToken = (refreshToken: IRefreshToken): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch(requestAuthenticationToken());

        authenticationApiClient().refreshAuthenticationToken(refreshToken)
            .then(
                (response: any) => {
                    dispatch(getAuthenticationTokenSuccess(response.data))
                },
                (error: any) => {
                    dispatch(refreshAuthenticationTokenFailure(error.response));
                }
            );
    }
};

export const logout = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch(requestLogout());
        dispatch(logoutSuccess());
    }
};

