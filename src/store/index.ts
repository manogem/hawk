import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from "./rootReducer";
import { storage } from "../common/services/StorageService";

export const PERSISTENT_STORE = 'PERSISTENT_STORE';

const middlewares = [thunk];

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
);

store.subscribe(() => storage.setObject(PERSISTENT_STORE, store.getState()));