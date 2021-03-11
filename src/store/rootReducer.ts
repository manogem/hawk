import { combineReducers } from 'redux';
import language from "./language/reducer";
import authenticationToken from "./authenticationToken/reducer";

export const rootReducer = combineReducers({
  language,
  authenticationToken,
});

export type RootState = ReturnType<typeof rootReducer>