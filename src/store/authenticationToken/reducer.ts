import {
    REFRESH_AUTHENTICATION_TOKEN_ERROR,
    GET_AUTHENTICATION_TOKEN_ERROR,
    GET_AUTHENTICATION_TOKEN_SUCCESS,
    REQUEST_AUTHENTICATION_TOKEN,
    LOGOUT_SUCCESS, REQUEST_LOGOUT
} from "./actionTypes";

const HTTP_OK = 200;
const HTTP_UNAUTHORIZED = 401;
const HTTP_SESSION_EXPIRED = 440;
const HTTP_INTERNAL_ERROR = 500;

const initialState = {
    isFetching: false,
    token: null,
    refreshToken: null,
    status: null,
};

const authenticationToken = (state = initialState, action: any) => {
    switch (action.type) {
        case REQUEST_AUTHENTICATION_TOKEN:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case GET_AUTHENTICATION_TOKEN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                token: action.data.token,
                refreshToken: action.data.refresh_token,
                status: null,
            });
        case GET_AUTHENTICATION_TOKEN_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                token: null,
                refreshToken: null,
                status: action.error?.status || HTTP_INTERNAL_ERROR,
            });
        case REFRESH_AUTHENTICATION_TOKEN_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                token: null,
                refreshToken: null,
                status: HTTP_SESSION_EXPIRED,
            });
        case REQUEST_LOGOUT:
            return Object.assign({}, state, {
                isFetching: true,
                status: null,
            });
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                token: null,
                refreshToken: null,
                status: HTTP_OK,
            });
        default:
            return state
    }
};

export default authenticationToken;