import { SET_LANGUAGE } from "./actionTypes";
import {LOCALE} from "../../config/locales";

const initialState = LOCALE.PL;

const language = (state = initialState, action: any): string => {
    switch (action.type) {
        case SET_LANGUAGE: {
            return action.payload.language;
        }
        default: {
            return state;
        }
    }
};

export default language;