import { RootState } from "../rootReducer";

export const isFetchingSelector = (state: RootState) => state.authenticationToken.isFetching;
export const authenticationTokenSelector = (state: RootState) => state.authenticationToken.token;
export const refreshTokenSelector = (state: RootState) => state.authenticationToken.refreshToken;
export const statusSelector = (state: RootState) => state.authenticationToken.status;

