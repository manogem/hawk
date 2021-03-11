import { SET_LANGUAGE } from "./actionTypes";

export interface SetLanguageProps {
    setLanguage: (language: string) => void;
}

export const setLanguage = (language: string) => ({ type: SET_LANGUAGE, payload: { language } });
