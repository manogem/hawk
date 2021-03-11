import { AuthApi } from "../../../common/services/ApiService";

export interface IUserData {
    username: string,
    password: string
}

export interface IRefreshToken {
    refresh_token: string,
}

export const authenticationApiClient = () => {
    return {
        fetchAuthenticationToken: async (userData: IUserData): Promise<void> => AuthApi.post('/get-token', userData),
        refreshAuthenticationToken: async (refreshToken: IRefreshToken): Promise<void> => AuthApi.post('/token/refresh', refreshToken),
    };
};

